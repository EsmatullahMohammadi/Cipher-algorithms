import { useFormik } from "formik";
import * as Yup from "yup";
function FormLearn() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "the first name should be less than 20 char")
        .required("First name is required"),
      lastName: Yup.string()
        .max(20, "Max legnth is 20 chars")
        .min(3, "min legnth is 3 char")
        .required("lastName is required"),
      email: Yup.string().email("invalid email").required("email is required"),
    }),
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">firstName</label>
        <input
          type="text"
          id="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          name="firstName"
        />
        {formik.touched.firstName && formik.errors.firstName
          ? formik.errors.firstName
          : null}

        <br />
        <label htmlFor="lastName">lastName</label>
        <input
          type="text"
          id="lastName"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName
          ? formik.errors.lastName
          : null}
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="emaild" {...formik.getFieldProps("emai")} />
        {formik.touched.email && formik.errors.email
          ? formik.errors.email
          : null}
        <br />
        <button type="submit"
         className=" ml-5 p-2 pl-5 pr-5 bg-tranparent
         border-2 border-yellow-500 text-yellow-500 text-lg
         rounded-lg
         hover:bg-yellow-500 hover:text-gray-100
         focus:border-4 focus: border-yellow-30

         ">
          submit
        </button>
      </form>
      {/* <p className='text-red-700 text-4xl md:max-lg:text-blue-600'>Hello world!</p> */}
      <img
        className="rounded-3xl mx-auto mt-5"
        src="src/assets/1697905703Esmat1.png"
        alt="My image"
      ></img>
    </>
  );
}

export default FormLearn;
