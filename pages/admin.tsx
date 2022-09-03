import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-danger">{meta.error}</div>
      ) : null}
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
const SignupForm = () => {
  return (
    <>
      <h1 className="text-center py-3">Add a new Product</h1>
      <Formik
        initialValues={{
          name: "",
          quantity: "",
          price: "",
          category: "", // added for our select
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          quantity: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          price: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("Required"),
          category: Yup.string()
            .oneOf(["tech", "general"], "Invalid Category")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post("/user", JSON.stringify(values, null, 2))
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });

          setSubmitting(false);
        }}
      >
        <Form className="w-50 mx-auto">
          <MyTextInput
            label="Name"
            name="name"
            type="text"
            placeholder="pencil"
            className="form-control mt-3"
          />

          <MyTextInput
            label="Quantity"
            name="quantity"
            type="text"
            placeholder="1"
            className="form-control mt-3"
          />

          <MyTextInput
            label="Price"
            name="price"
            type="text"
            placeholder="123"
            className="form-control mt-3"
          />

          <MySelect
            label="Category"
            name="category"
            className="form-control mt-3"
          >
            <option value="">Select a Category</option>
            <option value="tech">Tech</option>
            <option value="general">General</option>
          </MySelect>

          <button className="btn btn-primary px-5 py-2 mt-4" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm;
