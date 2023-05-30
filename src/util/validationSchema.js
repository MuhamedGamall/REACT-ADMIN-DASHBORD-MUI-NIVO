import * as Yup from "yup";
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

export const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(3, "First name must be at least 3 characters")
    .max(20, "First name must be less than 20 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters")
    .max(20, "Last name must be less than 20 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address")
    .max(500, "Email must be less than 500 characters"),
    contact: Yup.string()
    .required("Phone Number is required")
    .matches(phoneRegExp, "Phone Number is not Vaild"),
  address1: Yup.string()
    .required("First address is required")
    .min(3, "First address must be at least 3 characters")
    .max(20, "First address must be less than 20 characters"),
  address2: Yup.string()
    .notRequired()
    .min(0, "Second address must be at least 0 characters")
    .max(20, "Second address must be less than 20 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .min(6, "Confirm Password must be at least 6 characters")
    .max(20, "Confirm Password must be less than 20 characters"),
});
