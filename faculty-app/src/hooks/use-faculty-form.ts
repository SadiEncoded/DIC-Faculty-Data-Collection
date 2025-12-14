import { submitFaculty } from '@/app/actions/submit-faculty'
import { facultySchema } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const useFacultyForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string; registrationNumber?: string } | null>(null)
  const [showPreviewModal, setShowPreviewModal] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const form = useForm({
    resolver: zodResolver(facultySchema),
    mode: 'onBlur',
    defaultValues: {
      fullName: '',
      designation: '',
      department: undefined,
      qualification: '',
      experienceYears: undefined,
      expertise: '',
      email: '',
    }
  })

  const { trigger, watch } = form
  const formValues = watch()

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPreviewImage(url)
    } else {
      setPreviewImage(null)
    }
  }

  const onPreSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const isValid = await trigger()
    if (isValid) {
      setShowPreviewModal(true)
    }
  }

  const onFinalSubmit = async () => {
    setIsSubmitting(true)
    
    const formData = new FormData()
    formData.append('fullName', formValues.fullName)
    formData.append('designation', formValues.designation)
    formData.append('department', formValues.department)
    formData.append('qualification', formValues.qualification)
    formData.append('experienceYears', String(formValues.experienceYears))
    formData.append('expertise', formValues.expertise)
    formData.append('email', formValues.email)
    
    // Type-safe file access
    const values = formValues as Record<string, any>
    if (values.photo?.[0]) {
      formData.append('photo', values.photo[0])
    }

    const result = await submitFaculty({ message: '', success: false }, formData)
    
    setIsSubmitting(false)
    setSubmitResult(result)
    setShowPreviewModal(false)
    
    if (result.success) {
      window.scrollTo(0, 0)
    }
  }

  return {
    form,
    formValues,
    isSubmitting,
    submitResult,
    showPreviewModal,
    setShowPreviewModal,
    previewImage,
    handlePhotoChange,
    onPreSubmit,
    onFinalSubmit
  }
}
