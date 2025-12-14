'use server'

import { createAdminClient } from '@/utils/supabase/admin'

export type FormState = {
  message: string
  success: boolean
  registrationNumber?: string
  errors?: Record<string, string[]>
}

export async function submitFaculty(prevState: FormState, formData: FormData): Promise<FormState> {
  const supabase = createAdminClient()

  const photo = formData.get('photo') as File
  const fullName = formData.get('fullName') as string
  const designation = formData.get('designation') as string
  const department = formData.get('department') as string
  const qualification = formData.get('qualification') as string
  const experienceYears = formData.get('experienceYears') as string
  const expertise = formData.get('expertise') as string
  const email = formData.get('email') as string

  // Validation
  if (!email) return { success: false, message: 'Email is required.' }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) return { success: false, message: 'Invalid email address.' }

  if (!photo || photo.size === 0) return { success: false, message: 'Profile photo is required.' }

  try {
    // Check for duplicates
    const { data: existing, error: fetchError } = await supabase
      .from('faculty_profiles')
      .select('id')
      .eq('email', email)
      .maybeSingle()

    if (fetchError) {
      console.error('Database fetch error:', fetchError)
      return { success: false, message: `Database error: ${fetchError.message}` }
    }

    if (existing) {
      return { success: false, message: 'A profile with this email already exists.' }
    }

    // Insert faculty data (relying on DB trigger for registration_number)
    const expertiseArray = expertise.split(',').map(s => s.trim()).filter(Boolean)

    const { data: insertedData, error: insertError } = await supabase
      .from('faculty_profiles')
      .insert({
        full_name: fullName,
        designation,
        department,
        qualification,
        experience_years: Number(experienceYears),
        expertise: expertiseArray,
        email,
        photo_url: 'pending',
        is_approved: false
      })
      .select('id, registration_number')
      .single()

    if (insertError) {
      console.error('Database insert error:', insertError)
      return { success: false, message: 'Database error: ' + insertError.message }
    }

    if (!insertedData?.registration_number) {
      console.error('Registration number not generated')
      return { success: false, message: 'Failed to generate registration number.' }
    }

    // Upload photo using registration number as filename
    const fileExt = photo.name.split('.').pop()
    const fileName = `${insertedData.registration_number}.${fileExt}`
    const arrayBuffer = await photo.arrayBuffer()
    const fileBuffer = Buffer.from(arrayBuffer)

    const { error: uploadError } = await supabase.storage
      .from('faculty-photos')
      .upload(fileName, fileBuffer, { 
        contentType: photo.type,
        upsert: true
      })

    if (uploadError) {
      console.error('Photo upload error:', uploadError)
      // Rollback: Delete the inserted record
      await supabase.from('faculty_profiles').delete().eq('id', insertedData.id)
      return { success: false, message: 'Failed to upload photo.' }
    }

    // Get public URL and update the record
    const { data: { publicUrl } } = supabase.storage
      .from('faculty-photos')
      .getPublicUrl(fileName)

    const { error: updateError } = await supabase
      .from('faculty_profiles')
      .update({ photo_url: publicUrl })
      .eq('id', insertedData.id)

    if (updateError) {
      console.error('Photo URL update error:', updateError)
      return { success: false, message: 'Failed to save photo URL.' }
    }

    return { 
      success: true, 
      message: 'Faculty profile submitted successfully!',
      registrationNumber: insertedData.registration_number
    }
  } catch (err) {
    console.error('Unexpected error:', err)
    return { success: false, message: 'An unexpected error occurred.' }
  }
}
