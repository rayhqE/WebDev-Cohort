import React, { useState } from "react";

const ROLES = ["Frontend", "BackEnd", "AI Engineer"];

const ManualForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    role: "Frontend",
    experience: "",
    cover: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function set(field) {
    return (e) => setValues((v) => ({ ...values, [field]: e.target.value }));
  }
  function validate(v) {
    const e = {};
    if (!v.name.trim()) e.name = "name is required";
    if (!v.email.trim()) e.email = "email is required";
    return e;
  }

  function submit(ev) {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  }
  if (submitted) {
    return (
      <div>
        <h1>Form submitted successfully {values.name}</h1>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={submit} noValidate>
        <label>
          Full Name
          <input value={values.name} onChange={set("name")} />
          {errors.name && <span>{errors.name}</span>}
        </label>
        <br></br>
        <label>
          Email
          <input value={values.email} onChange={set("email")} />
          {errors.email && <span>{errors.email}</span>}
          {/* {errors.name !== "" ? <span>{errors.name}</span> : null} */}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ManualForm;
