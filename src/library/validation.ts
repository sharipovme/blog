import * as yup from "yup";

const schemaFieldTypes = {
  required: yup
    .string()
    .strict()
    .trim("Required field")
    .required("Required field"),
  email: yup.string().required("Required field").email("Wrong email address"),
};

export default schemaFieldTypes;
