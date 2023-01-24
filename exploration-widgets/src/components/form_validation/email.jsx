import { useFormik } from "formik";
import * as Yup from "yup";

export const Email = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    //validate form
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email adress")
        .required("Email is required"),
    }),

    //submit form
    onSubmit: (values) => {},
  });
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
          <h1 className="text-2xl font-medium">Send me an email 👨‍💻</h1>
          <label>{formik.errors.email}</label>
          <input
            className="rounded-3xl px-4"
            type="email"
            name="email"
            value={formik.initialValues.email}
            placeholder="Enter your Email"
          />
          <button className="bg-blue-800 py-2 px-6 text-white rounded-full">
            Send Email
          </button>
        </form>
      </div>
    </>
  );
};
export default Email;
