import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { addContact } from "../../redux/contactsOps";
import styles from "./ContactForm.module.css";

const ContactSchema = object({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄёЁ'’\- ]{2,}$/,
      "Name must contain only letters and be at least 2 characters",
    )
    .required("Name is required"),
  number: string()
    .matches(/^\+?[0-9\s\-]{7,20}$/, "Invalid phone number format")
    .required("Phone number is required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ name: values.name, phone: values.number }));
    resetForm();
  };

  return (
    <div className="card">
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <label className={styles.label}>
              Name
              <Field
                className={styles.input}
                name="name"
                placeholder="Max Payn"
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </label>

            <label className={styles.label}>
              Number
              <Field
                className={styles.input}
                name="number"
                placeholder="+11 123 456 789"
              />
              <ErrorMessage
                name="number"
                component="div"
                className={styles.error}
              />
            </label>

            <button className={styles.button} type="submit">
              Add Contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
