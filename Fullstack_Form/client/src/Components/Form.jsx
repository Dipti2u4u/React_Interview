import React, { useState } from "react";
import "./Form.css";
import userClientApi from "../clientApi/userClientpi";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await userClientApi.insertUser(formData)
      alert("user registered successfully",response.data)
    }catch(err){
      console.log('error inserting the user',err)
    }
  };

  return (
    <>
      <div className="main_container">
        <div className="sub_container">
          <h2>Login Form</h2>
          <form className="form_container" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.value}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Enter Your Number"
                value={formData.value}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                placeholder="Enter Your email"
                value={formData.value}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="password"
                placeholder="Enter Your Password"
                value={formData.value}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
