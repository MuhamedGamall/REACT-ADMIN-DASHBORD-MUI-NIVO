import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { useFormik } from "formik";
import Header from "../../components/Header";
import { userSchema } from "../../util/validationSchema";
import { Form as myForm } from "react-bootstrap";
import { memo } from "react";

const Form = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (val) => {
    console.log(val);
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      contact: "",
      address1: "",
      address2: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: userSchema,
    onSubmit: (val) => {
      handleFormSubmit(val);
      console.log(val.firstName);
    },
  });

  return (
    <Box>
      <Header title={"CREATE NEW USER"} subTitle={"Create New User Profile"} />
      <form m="40px 0 0 0" onSubmit={formik.handleSubmit}>
        <Box
          display={"grid"}
          gap={"30px"}
          gridTemplateColumns={"repeat(4,minmax(0,1fr))"}
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="First Name"
            name="firstName"
            error={!!formik.touched.firstName && !!formik.errors.firstName}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            helperText={formik.touched.firstName && formik.errors.firstName}
            sx={{ gridColumn: "span 2" }}
          />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Last Name"
            name="lastName"
            error={!!formik.touched.lastName && !!formik.errors.lastName}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            helperText={formik.touched.lastName && formik.errors.lastName}
            sx={{ gridColumn: "span 2" }}
          />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Email"
            name="email"
            error={!!formik.touched.email && !!formik.errors.email}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ gridColumn: "span 4" }}
          />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Contact Number"
            name="contact"
            error={!!formik.touched.contact && !!formik.errors.contact}
            value={formik.values.contact}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            helperText={formik.touched.contact && formik.errors.contact}
            sx={{ gridColumn: "span 4" }}
          />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label=" First Address"
            name="address1"
            error={!!formik.touched.address1 && !!formik.errors.address1}
            value={formik.values.address1}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            helperText={formik.touched.address1 && formik.errors.address1}
            sx={{ gridColumn: "span 4" }}
          />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Second Address"
            name="address2"
            error={!!formik.touched.address2 && !!formik.errors.address2}
            value={formik.values.address2}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            helperText={formik.touched.address2 && formik.errors.address2}
            sx={{ gridColumn: "span 4" }}
          />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Password"
            name="password"
            error={!!formik.touched.password && !!formik.errors.password}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Confirm Password"
            name="confirmPassword"
            error={
              !!formik.touched.confirmPassword &&
              !!formik.errors.confirmPassword
            }
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            sx={{ gridColumn: "span 4" }}
          />
        </Box>
        <Box display={"flex"} justifyContent={"end"} mt={"20px"}>
          <Button type="submit" color="secondary" variant="contained">
            Create New User
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
