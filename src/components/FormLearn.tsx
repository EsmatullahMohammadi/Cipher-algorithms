// import { useFormik } from "formik";
// import * as Yup from "yup";
// function FormLearn() {
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//     },
//     onSubmit: (values) => {
//       alert(JSON.stringify(values));
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string()
//         .max(20, "the first name should be less than 20 char")
//         .required("First name is required"),
//       lastName: Yup.string()
//         .max(20, "Max legnth is 20 chars")
//         .min(3, "min legnth is 3 char")
//         .required("lastName is required"),
//       email: Yup.string().email("invalid email").required("email is required"),
//     }),
//   });
//   return (
//     <>
//       <form onSubmit={formik.handleSubmit}>
//         <label htmlFor="firstName">firstName</label>
//         <input
//           type="text"
//           id="firstName"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.firstName}
//           name="firstName"
//         />
//         {formik.touched.firstName && formik.errors.firstName
//           ? formik.errors.firstName
//           : null}

//         <br />
//         <label htmlFor="lastName">lastName</label>
//         <input
//           type="text"
//           id="lastName"
//           {...formik.getFieldProps("lastName")}
//         />
//         {formik.touched.lastName && formik.errors.lastName
//           ? formik.errors.lastName
//           : null}
//         <br />
//         <label htmlFor="email">Email</label>
//         <input type="email" id="emaild" {...formik.getFieldProps("emai")} />
//         {formik.touched.email && formik.errors.email
//           ? formik.errors.email
//           : null}
//         <br />
//         <button type="submit"
//          className="p-2 pl-5 pr-5 ml-5 text-lg text-yellow-500 border-2 border-yellow-500 rounded-lg  bg-tranparent // hover:bg-yellow-500 hover:text-gray-100 focus:border-4 focus: border-yellow-30">
//           submit
//         </button>
//       </form>
//       {/* <p className='text-4xl text-red-700 md:max-lg:text-blue-600'>Hello world!</p> */}
//       <img
//         className="mx-auto mt-5 rounded-3xl"
//         src="src/assets/1697905703Esmat1.png"
//         alt="My image"
//       ></img>
//     </>
//   );
// }

// export default FormLearn;
