import { z } from 'zod';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const facultySchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  designation: z.string().min(2, "Designation is required"),
  department: z.enum(["science", "business", "humanities", "CSE", "BBA"], {
    message: "Please select a department",
  }),
  qualification: z.string().min(2, "Qualification is required"),
  experienceYears: z.coerce
    .number()
    .min(0, "Experience cannot be negative")
    .int("Experience must be a whole number"),
  expertise: z.string().min(2, "Please list your areas of expertise (comma separated)"),
  email: z
    .string()
    .email("Invalid email address"),
  photo: z
    .custom<FileList>()
    .refine((files) => files instanceof FileList && files.length > 0, "Profile photo is required")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max file size is 2MB")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, and .png formats are supported"
    ),
})

export type FacultyFormValues = z.infer<typeof facultySchema>
