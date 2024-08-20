import React, { useState } from "react";

const Validation = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validate = () => {
    let valid = true;
    let nameError = "";
    let emailError = "";

    if (formData.name.trim() === "") {
      nameError = "Name is required";
      valid = false;
    }

    if (!formData.email.includes("@")) {
      emailError = "this is not an email";
      valid = false;
    }
    setError({name:nameError,email:emailError})
    return valid
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    if(validate()){
      alert('form submitted successfully')
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Controlled Form</h2>
        <input
          type="text"
          name="name"
          placeholder="enter your Name"
          value={formData.name}
          onChange={handleChange}
        />
        {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
        <br />
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Validation;
