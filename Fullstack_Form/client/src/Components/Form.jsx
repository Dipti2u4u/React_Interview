import React, { useState } from "react";
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  return (
    <>
      <div className="main_container">
        <div className="sub_container">
          <h2>Login Form</h2>
          <form className="form_container">
            <div>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={formData.value}
                // onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Enter Your Number"
                value={formData.value}
                // onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Your email"
                value={formData.value}
                // onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Your Password"
                value={formData.value}
                // onChange={handleInputChange}
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
