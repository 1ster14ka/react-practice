import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  email: "",
  message: "",
  language: "ua",
};

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "To short")
    .max(20, "To long")
    .required("Required"),
  email: Yup.string().email("Must be a valid email").required("Required"),
  message: Yup.string(),
  language: Yup.string().oneOf(["ua", "en", "pl"]).required("Reqquired"),
});

const FormikLearn = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label>
          UserName
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="span" />
        </label>
        <label>
          Email: <Field type="email" name="email" />
        </label>
        <label>
          Comment:
          <Field as="textarea" name="message" />
        </label>
        <label>
          <Field as="select" name="language">
            <option value="ua">Ukranian</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
          </Field>
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikLearn;
