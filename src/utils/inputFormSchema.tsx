import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  subject: yup.string().required("Subject is required"),
  marks: yup
    .number()
    .typeError("Invalid Value")
    .positive()
    .integer()
    .min(0, "Invalid Value")
    .required("Marks are required"),
  grades: yup.string().required("Grade is required"),
});
