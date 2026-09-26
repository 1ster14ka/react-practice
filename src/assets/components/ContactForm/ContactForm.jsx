import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ addContacts }) => {
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(20, "Too long")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{9}$/, "Number must contain exactly 9 digits")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    // console.log(values);
    addContacts({ ...values, id: crypto.randomUUID() });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={s.form}>
        <label className={s.label}>
          <span className={s.subtitleInput}>Name </span>
          <Field type="text" name="name" className={s.input} />
          <ErrorMessage
            name="name"
            component="span"
            className={s.errorMessage}
          />
        </label>
        <label className={s.label}>
          <span className={s.subtitleInput}> Number</span>
          <Field type="number" name="number" className={s.input} />
          <ErrorMessage
            name="number"
            component="span"
            className={s.errorMessage}
          />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
