import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LoginAPI } from "../apis/login/login";

const LoginPage = () => {
    const navigate=useNavigate();
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = async (values) => {
        try{
            const res = await LoginAPI.post(values);
            console.log(res);
            navigate("/profile");
        } catch (err) {
            console.log(err);
            window.location.reload();
        }
    };
    const values = {
        email:"",
        password:"",
    };

    return (
    <Box m="20px">
      <div className="common-login">

      </div>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={values}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleFormSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                flexDirection: 'column',
                justifyContent: 'center',
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={e => handleChange(e)}
                value={values.email}
                name="email"
                sx={{ gridColumn: "span 4",
                    maxWidth: "300px" }}
              />
              <TextField
                fullWidth  
                variant="filled"
                type="text"
                label="Password"
                onBlur={handleBlur}
                onChange={e => handleChange(e)}
                value={values.password}
                name="password"
                sx={{ gridColumn: "span 4" ,
                        maxWidth: "300px"}}
              />
            </Box>
            <Box display="flex" justifyContent="start" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Login
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

export default LoginPage;
