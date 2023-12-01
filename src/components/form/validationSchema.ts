import * as yup from "yup";

export const validationSchema = yup.object().shape({
  personalInfo: yup.object().shape({
    profileInfo: yup.object().shape({
      firstName: yup.string().required("Bu alan gereklidir."),
      lastName: yup.string().required("Bu alan gereklidir."),
      birthDate: yup.object().shape({
        day: yup.string().when("isRequired", {
          is: true,
          then() {
            return yup.string().required("Bu alan gereklidir.");
          },
        }),
        month: yup.string().when("isRequired", {
          is: true,
          then() {
            return yup.string().required("Bu alan gereklidir.");
          },
        }),
        year: yup.string().when("isRequired", {
          is: true,
          then() {
            return yup.string().required("Bu alan gereklidir.");
          },
        }),
      }),
    }),
    contactInfo: yup.object().shape({
      email: yup
        .string()
        .email("Geçerli bir e-posta girin.")
        .required("Bu alan gereklidir."),
      phone: yup.string().required("Bu alan gereklidir."),
    }),
    educationHistory: yup.array().of(
      yup.object().shape({
        startDate: yup.string().required("Bu alan gereklidir."),
        university: yup.string().required("Bu alan gereklidir."),
      })
    ),
    languageSkills: yup.array().of(
      yup.object().shape({
        language: yup.string().required("Bu alan gereklidir."),
        proficiency: yup.string().required("Bu alan gereklidir."),
      })
    ),
  }),
  professionalInfo: yup.object().shape({
    about: yup.string().required("Bu alan gereklidir."),
    workExperience: yup.array().of(
      yup.object().shape({
        startDate: yup.string().required("Bu alan gereklidir."),
        company: yup.string().required("Bu alan gereklidir."),
        profession: yup.string().required("Bu alan gereklidir."),
        responsibilities: yup.string().required("Bu alan gereklidir."),
      })
    ),
    skills: yup.array().of(
      yup.object().shape({
        skillName: yup.string().required("Bu alan gereklidir."),
        proficiency: yup.string().required("Bu alan gereklidir."),
      })
    ),
  }),
});
