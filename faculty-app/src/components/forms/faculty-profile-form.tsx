'use client'

import { FacultyReviewModal } from '@/components/forms/faculty-review-modal'
import { Button } from '@/components/ui/button'
import { DepartmentSelect } from '@/components/ui/department-select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useFacultyForm } from '@/hooks/use-faculty-form'
import { Briefcase, Check, Clock, GraduationCap, Mail, User } from 'lucide-react'
import Image from 'next/image'

export function FacultyProfileForm() {
  const {
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
  } = useFacultyForm()

  const { register, formState: { errors } } = form

  if (submitResult?.success) {
    return (
      <div className="w-full max-w-xl rounded-2xl overflow-hidden bg-white shadow-card p-12 text-center">
        <div className="w-16 h-16 bg-[#ffd166]/20 text-[#8a6a00] rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={32} />
        </div>
        <h2 className="text-xl font-semibold text-[#021c3e] mb-3">Submission Received</h2>
        
        {submitResult.registrationNumber && (
          <div className="mb-6 p-4 bg-[#169bc8]/10 rounded-lg border border-[#169bc8]/20">
            <p className="text-xs text-[#5b6b82] mb-1">Registration Number</p>
            <p className="text-2xl font-bold text-[#021c3e] font-mono tracking-wider">
              {submitResult.registrationNumber}
            </p>
          </div>
        )}
        
        <p className="text-[#5b6b82] mb-8 text-sm leading-relaxed">
          Thank you, {formValues.fullName}. Your profile has been securely submitted to the Academic Affairs Office for review.
        </p>
        <Button onClick={() => window.location.reload()}>
          Submit Another Profile
        </Button>
      </div>
    )
  }

  return (
    <>
      <div className="w-full max-w-xl rounded-2xl overflow-hidden bg-white shadow-card">
        {/* Header - Refined "Official" Look */}
        <div className="relative bg-[#021c3e] px-8 py-8 overflow-hidden border-b-4 border-[#ffd166]">
           {/* Abstract Background Decoration */}
           <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#169bc8] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
           <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#ffd166] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              {/* Logo Container */}
              <div className="flex-shrink-0 p-4 rounded-2xl">
                <Image 
                  src="/DIC Logo.png" 
                  alt="DIC Logo" 
                  width={90}
                  height={90}
                  className="object-contain brightness-110"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-1">
                <h2 className="text-[#ffd166] text-xs font-bold uppercase tracking-[0.15em] mb-2 font-sans">
                  Daffodil International College
                </h2>
                <h1 className="text-white text-2xl md:text-3xl font-serif font-medium tracking-wide leading-tight">
                  Faculty Profile Form
                </h1>
                <p className="text-blue-100/80 text-sm font-light tracking-wide">
                  Academic Affairs & Records
                </p>
              </div>
           </div>
        </div>

        {/* Server Error Banner */}
        {submitResult && !submitResult.success && (
          <div className="mx-8 mt-8 mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
             <div className="text-red-500 shrink-0 mt-0.5">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
             </div>
             <div>
               <h4 className="text-sm font-semibold text-red-800">Submission Failed</h4>
               <p className="text-xs text-red-600 mt-1">{submitResult.message}</p>
             </div>
          </div>
        )}

        {/* Form */}
        <form className="p-8 space-y-7" onSubmit={onPreSubmit}>
          
          {/* Personal Information Section */}
          <section className="border border-[#e5eaf1] rounded-xl p-6 bg-gradient-to-b from-white to-[#fbfdff]">
            <h3 className="text-sm font-semibold text-[#021c3e] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffd166]" />
              Personal Information
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#5b6b82] mb-1.5">Full Name *</label>
                <Input
                  {...register('fullName')}
                  placeholder="Eng. Sara Matin"
                  error={errors.fullName?.message}
                  startIcon={<User size={18} />}
                />
              </div>

              {/* Photo Upload aligned with Personal Info */}
               <div>
                <label className="block text-sm font-medium text-[#5b6b82] mb-1.5">Profile Photo *</label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    {...register('photo', { onChange: handlePhotoChange })}
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#169bc8]/10 file:text-[#021c3e] hover:file:bg-[#169bc8]/20"
                  />
                  {previewImage && (
                    <div className="w-20 h-20 relative rounded-full overflow-hidden border border-gray-200 shrink-0">
                      <Image src={previewImage} alt="Preview" fill className="object-cover" unoptimized />
                    </div>
                  )}
                </div>
                 <p className="text-red-500 text-xs mt-1">{errors.photo?.message as string}</p>
              </div>
            </div>
          </section>

          {/* Academic Details Section */}
          <section className="border border-[#e5eaf1] rounded-xl p-6 bg-gradient-to-b from-white to-[#fbfdff] space-y-4">
            <h3 className="text-sm font-semibold text-[#021c3e] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffd166]" />
              Academic Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <DepartmentSelect 
                watch={form.watch} 
                setValue={form.setValue} 
                error={errors.department?.message} 
              />
              
              <div>
                <label className="block text-sm font-medium text-[#5b6b82] mb-1.5">Experience (Years) *</label>
                <Input
                  type="number"
                  min="0"
                  step="1"
                  {...register('experienceYears')}
                  placeholder="7"
                  error={errors.experienceYears?.message}
                  startIcon={<Clock size={18} />}
                  onKeyDown={(e) => {
                    if (["-", "+", "e", "E", "."].includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#5b6b82] mb-1.5">Designation / Subject *</label>
              <Input
                 {...register('designation')}
                placeholder="Assistant Professor — Computer Architecture"
                error={errors.designation?.message}
                startIcon={<Briefcase size={18} />}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#5b6b82] mb-1.5">Highest Qualification *</label>
              <Input
                {...register('qualification')}
                placeholder="MSc in Computer Architecture"
                error={errors.qualification?.message}
                startIcon={<GraduationCap size={18} />}
              />
            </div>
          </section>

          {/* Expertise & Contact Section */}
          <section className="border border-[#e5eaf1] rounded-xl p-6 bg-gradient-to-b from-white to-[#fbfdff] space-y-4">
            <h3 className="text-sm font-semibold text-[#021c3e] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffd166]" />
              Expertise & Contact
            </h3>

            <div>
              <label className="block text-sm font-medium text-[#5b6b82] mb-1.5">Areas of Expertise *</label>
              <Textarea
                {...register('expertise')}
                placeholder="Digital Logic, CPU Design, Assembly Language"
                error={errors.expertise?.message}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#5b6b82] mb-1.5">Official Email *</label>
              <Input
                type="email"
                {...register('email')}
                placeholder="faculty@example.com"
                error={errors.email?.message}
                startIcon={<Mail size={18} />}
              />
            </div>
          </section>

          {/* Submit Button */}
          <Button type="submit" fullWidth className="bg-gradient-to-r from-[#021c3e] to-[#042A5A] hover:to-[#021c3e] shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-0.5">
            Review Submission
          </Button>
        </form>

        {/* Footer */}
        <div className="text-center text-xs text-[#5b6b82] px-8 py-6 border-t bg-gray-50/50">
          All submitted information will be reviewed and approved by the Academic Affairs Office
          prior to publication.
        </div>
      </div>

      <FacultyReviewModal
        isOpen={showPreviewModal}
        onClose={() => setShowPreviewModal(false)}
        onConfirm={onFinalSubmit}
        isSubmitting={isSubmitting}
        formValues={formValues}
        previewImage={previewImage}
      />
    </>
  )
}
