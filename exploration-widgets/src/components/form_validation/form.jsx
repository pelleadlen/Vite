import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export const Form = () => {
  const navigate = useNavigate();
  //Formik logics

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "Denmark",
      terms: "",
    },

    //validate form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be at 20 characters or less")
        .required("name is required"),
      email: Yup.string()
        .email("Invalid email adress")
        .required("Email is required"),
      terms: Yup.array().required("Terms of service must be checked"),
    }),

    //submit form
    onSubmit: (values) => {
      console.log(values);
      navigate("/Entry");
    },
  });

  return (
    <>
      <main className="h-screen m-8 flex flex-col items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="shadow-md w-full bg-white py-4 px-8 flex flex-col rounded-lg"
        >
          <div className="text-gray-700">
            <h1
              className="
            text-4xl font-bold py-8 "
            >
              Let's get started
            </h1>
          </div>
          <div className="mt-2">
            {/* Name Input field */}
            <div className="py-4">
              <label
                className={`block text-gray-400 mb-2 text-sm ${
                  formik.touched.email && formik.errors.name
                    ? "text-red-800"
                    : ""
                }`}
                htmlFor="name"
              >
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : "Name"}
              </label>
              <input
                className={` w-full placeholder:text-sm outline-none focus:border-blue-800  p-2 border-2 rounded-lg ${
                  formik.touched.email && formik.errors.name
                    ? "border-red-600"
                    : "border-green-600"
                }`}
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder=" Enter your name"
                onBlur={formik.handleBlur}
              />
              <p>
                {" "}
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : ""}
              </p>
            </div>
            {/* email Input field */}
            <div className="py-4">
              <label
                className={`block text-gray-400 mb-2 text-sm ${
                  formik.touched.email && formik.errors.name
                    ? "text-red-800"
                    : ""
                }`}
                htmlFor="email"
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email"}
              </label>
              <input
                className=" w-full placeholder:text-sm outline-none focus:border-blue-800  p-2 border-2 rounded-lg  "
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder=" Enter your Email"
                onBlur={formik.handleBlur}
              />
            </div>
            {/* country Input field */}
            <div className="py-4">
              <label
                className="block text-gray-400 mb-2 text-sm"
                htmlFor="country"
              >
                Country
              </label>
              <select
                value={formik.values.country}
                onChange={formik.handleChange}
                name="country"
                className=" focus:border-blue-800 w-full  p-2 border-2 rounded-lg"
              >
                <option>Denmark</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Sweden</option>
              </select>
            </div>
            {/* Terms of service*/}
            <div className="pb-4 mt-6">
              <label
                className={`block text-gray-400 mb-2 text-sm ${
                  formik.touched.terms && formik.errors.terms
                    ? "text-red-800"
                    : ""
                }`}
                htmlFor="terms"
              >
                {formik.touched.terms && formik.errors.terms
                  ? formik.errors.terms
                  : "Terms of service"}
              </label>
              <div className="flex items-center gap-2">
                <input
                  onChange={formik.handleChange}
                  className="h-5 transition-all rounded-sm w-5 text-blue-500 border-2 focus:border-blue-800"
                  type="checkbox"
                  name="terms"
                  value="checked"
                  onBlur={formik.handleBlur}
                />
                <p className=" text-xs py-4">
                  I agree to this awesome services
                </p>
              </div>
            </div>
            <button
              type="submit"
              className=" text-xl font-normal my-8 bg-blue-600 hover:bg-blue-800 hover:scale-105 transition-all text-white py-3 mt-6 rounded-lg w-full"
            >
              Start it
            </button>
          </div>
        </form>
      </main>
    </>
  );
};
