import React, { useState } from "react";

const Form = () => {
  const initialState = {
    userName: "",
    password: "",
    gender: "",
    country: "",
    subjects: [],
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let updatedSubjects = [...formData.subjects];
      if (checked) {
        updatedSubjects.push(value);
      } else {
        updatedSubjects = updatedSubjects.filter(
          (subject) => subject !== value,
        );
      }
      setFormData({ ...formData, subjects: updatedSubjects });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialState);
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Register</legend>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            placeholder="Enter your UserName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="gender">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            <label htmlFor="male">Male</label>
          </label>
          <br />
          <br />
          <label htmlFor="country">Country</label>
          <select name="country" id="country" onChange={handleChange}>
            <option value="Nepal">Nepal</option>
            <option value="Nepal">India</option>
            <option value="Nepal">China</option>
          </select>
          <br />
          <br />
          <label>Subjects: </label>
          <input
            type="checkbox"
            name="subjects"
            value="Math"
            checked={formData.subjects.includes("Math")}
            onChange={handleChange}
          />{" "}
          Math
          <input
            type="checkbox"
            name="subjects"
            value="Science"
            checked={formData.subjects.includes("Science")}
            onChange={handleChange}
          />{" "}
          Science
          <input
            type="checkbox"
            name="subjects"
            value="English"
            checked={formData.subjects.includes("English")}
            onChange={handleChange}
          />{" "}
          English
          <br />
          <br />
          <button type="submit">Login</button>
          <button
            type="button"
            onClick={() => {
              setFormData(initialState);
            }}
          >
            Reset
          </button>
        </fieldset>
      </form>
      <div>
        <p>userName: {formData.userName}</p>
        <p>password: {formData.password}</p>
        <p>Gender: {formData.gender}</p>
        <p>Country: {formData.country}</p>
        <p>Subjects: {formData.subjects.join(",")}</p>
      </div>
    </div>
  );
};

export default Form;
