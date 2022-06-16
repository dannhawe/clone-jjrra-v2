import { useFormik } from "formik";
import * as Yup from "yup";
import { SignupSlice } from "../../redux/Slice/LoginSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TOKEN } from "../../util";

type Props = {};

export default function Signup({ }: Props) {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const { user } = useAppSelector((state) => state.LoginReducer);
   const phoneRegExp =
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

   // formilk
   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
         name: "",
         phoneNumber: "",
      },

      onSubmit: async (values) => {
         dispatch(SignupSlice(values)).then((err) => {
            err.payload && navigate('/')
         })
      },
      validationSchema: Yup.object({
         email: Yup.string().email("Invalid email format").required("Required!"),
         password: Yup.string()
            .min(5, "Minimum 5 characters")
            .required("Required!"),
         name: Yup.string().required("Required!"),
         phoneNumber: Yup.string().matches(
            phoneRegExp,
            "Phone number is not valid"
         ),
      }),
   });

   //render
   return (
      <form onSubmit={formik.handleSubmit}>
         {/* Email input */}
         <div className="mb-6">
            <input
               type="text"
               name="email"
               onChange={formik.handleChange}
               className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${formik.errors.email
                  ? `border border-red-600 focus:border-red-600 `
                  : ""
                  }`}
               onKeyUp={formik.handleBlur}
               placeholder="Email address"
            />
            {formik.errors.email && formik.touched.email && (
               <p className="text-red-600">{formik.errors.email}</p>
            )}
         </div>
         {/* Password input */}
         <div className="mb-6">
            <input
               type="text"
               name="password"
               onChange={formik.handleChange}
               className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${formik.errors.password
                  ? `border border-red-600 focus:border-red-600 `
                  : ""
                  }`}
               onKeyDown={formik.handleBlur}
               placeholder="Password"
            />
            {formik.errors.password && formik.touched.password && (
               <p className="text-red-600">{formik.errors.password}</p>
            )}
         </div>
         {/* name */}
         <div className="mb-6">
            <input
               type="text"
               name="name"
               onChange={formik.handleChange}
               className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${formik.errors.name
                  ? `border border-red-600 focus:border-red-600 `
                  : ""
                  }`}
               onKeyDown={formik.handleBlur}
               placeholder="name"
            />
            {formik.errors.name && formik.touched.name && (
               <p className="text-red-600">{formik.errors.name}</p>
            )}
         </div>
         {/* phoneNumber */}
         <div className="mb-6">
            <input
               type="text"
               name="phoneNumber"
               onChange={formik.handleChange}
               className={`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${formik.errors.phoneNumber
                  ? `border border-red-600 focus:border-red-600 `
                  : ""
                  }`}
               onKeyDown={formik.handleBlur}
               placeholder="phoneNumber"
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
               <p className="text-red-600">{formik.errors.phoneNumber}</p>
            )}
         </div>

         {/* login and forgot */}
         <div className="flex justify-center">
            <div className="text-center ">
               <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
               >
                  create
               </button>
               <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  have an account?
                  <Link
                     to={"/"}
                     id='btn-login'
                     className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >
                     Log In
                  </Link>
               </p>
            </div>
         </div>
      </form>
   );
}
