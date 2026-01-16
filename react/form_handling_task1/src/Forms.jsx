import { useState } from "react";
import "./Forms.css";

const Forms = () => {
  const initialState = {
    f_name: "",
    l_name: "",
    email: "",
    contact: "",
    gender: "",
    subject: [],
    resume: "",
    url: "",
    choice: "",
    aboutus: "",
    inputErr: "",
    contactErr:"",
    emailErr:"",
  };
  const [value, setValue] = useState(initialState);
  const resetForm = () => {
    setValue(initialState);
  };

  const handleChange = (e) => {
    const { id, value: inputValue, type, checked } = e.target;
    if (type === "checkbox") {
      setValue((prev) => {
        const subjects = checked
          ? [...prev.subject, id]
          : prev.subject.filter((s) => s !== id);
        return { ...prev, subject: subjects };
      });
    } else if (type === "radio") {
      setValue((prev) => ({ ...prev, gender: id }));
    } else if (type === "file") {
      setValue((prev) => ({ ...prev, resume: e.target.files[0] }));
    } else {
      setValue((prev) => ({ ...prev, [id]: inputValue }));
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (
      value.f_name.trim().length <= 0 ||
      value.l_name.trim().length <= 0 ||
      value.email.trim().length <= 0 ||
      value.contact.trim().length <= 0 ||
      value.gender.trim().length <= 0 ||
      value.url.trim().length <= 0 ||
      !value.resume
    ) {
      setValue((prev) => ({ ...prev, inputErr: "Please fill up all fields*" })); return;
    }
    if(value.contact.length!==10){
      setValue((prev) => ({ ...prev, contactErr: "Contact must have excetly 10 num" })); return;
    }

    console.log(value);

    setValue(initialState);
  };
  return (
    <div className="parent">
      <h1>Form in React</h1>
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <div className="name">
          <label htmlFor="f_name">First Name*</label>
          <br />
          <input
            onChange={handleChange}
            value={value.f_name}
            id="f_name"
            type="text"
            placeholder="Enter First Name"
          />
          <br />
          <label htmlFor="l_name">Last Name*</label>
          <br />
          <input
            onChange={handleChange}
            value={value.l_name}
            id="l_name"
            type="text"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="email">
          <label htmlFor="email">Enter Email*</label>
          <br />
          <input
            onChange={handleChange}
            value={value.email}
            id="email"
            type="text"
            placeholder="Enter email"
          />
        </div>
        <div className="contact">
          <label htmlFor="contact">Contact*</label>
          <br />
          <p
          style={{
            color:"red"
          }}
          >{value.contactErr}</p>
          <br />
          <input
            onChange={handleChange}
            value={value.contact}
            type="number"
            id="contact"
            placeholder="Enter Mobile Number"
          />
        </div>
        <label htmlFor="gender">Gender*</label>
        <div className="gender">
          <input onChange={handleChange} type="radio" id="male" name="gender" />
          <label htmlFor="male">Male</label>
          <input
            onChange={handleChange}
            type="radio"
            id="female"
            name="gender"
          />
          <label htmlFor="female">Female</label>
          <input
            onChange={handleChange}
            type="radio"
            id="other"
            name="gender"
          />
          <label htmlFor="other">Other</label>
        </div>
        <label htmlFor="sub">Your Best Subject</label>
        <div className="subject">
          <input onChange={handleChange} type="checkBox" id="english" />
          <label htmlFor="english">English</label>
          <input onChange={handleChange} type="checkBox" id="maths" />
          <label htmlFor="maths">Maths</label>
          <input onChange={handleChange} type="checkBox" id="physics" />
          <label htmlFor="physics">Physics</label>
        </div>
        <div className="resume">
          <label htmlFor="up_resuma">Uplode Resume*</label>
          <br />
          <input onChange={handleChange} type="file" id="up_resume" />
        </div>
        <div>
          <label htmlFor="url">Enter URL*</label>
          <br />
          <input
            onChange={handleChange}
            id="url"
            type="text"
            placeholder="Enter URL"
          />
        </div>
        <div>
          <label htmlFor="choice">Select your choice</label>
          <select
            name="sport"
            id="choice"
            value={value.choice}
            onChange={handleChange}
          >
            <option value="">--Select--</option>
            <option value="sport">Sport</option>
            <option value="dance">Dance</option>
            <option value="study">Study</option>
            <option value="travelling">Travelling</option>
          </select>
        </div>
        <div>
          <label htmlFor="about">About us </label>
          <textarea
            value={value.aboutus}
            onChange={handleChange}
            name="about"
            id="aboutus"
            rows={5}
            placeholder="About your self"
          ></textarea>
        </div>
        <label>Submit OR Reset</label>
        <br />
        <p
          style={{
            color: "red",
          }}
        >
          {value.inputErr}
        </p>
        <div className="btn">
          <button type="reset" onClick={resetForm}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
