import { useState } from "react";
function Forms() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    if (name.length <= 0) {
      setNameError("Name is empty ! *");
      return;
    }
    if (password.length <= 0 ) {
      setPasswordError("Password is empty!");
      return;
    }

    console.log(name);
    console.log(password);
    // api call

    setName("");
    setPassword("");
  };

  return (
    <div
      style={{
        border: "2px solid black",
        width: "500px",
        margin: "auto",
        marginTop: "100px",
        padding: "50px",
      }}
    >
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <div>
          <label htmlFor="name">
            Name:
            <br />
            <input
              onChange={(event) => {
                setName(event.target.value);
                                setNameError('')

              }}
              style={{
                padding: "10px",
                width: "100%",
              }}
              value={name}
              id="name"
              type="text"
              placeholder="Enter name......."
            />
            {nameError.length > 0 && (
              <p
                style={{
                  color: "red",
                  fontStyle: "italic",
                }}
              >
                {nameError}
              </p>
            )}
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <br />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError('')

              }}
              style={{
                padding: "10px",
                width: "100%",
              }}
              value={password}
              id="password"
              type="password"
              placeholder="Enter password...."
            />
            {passwordError.length > 0 && (
              <p
                style={{
                  color: "red",
                  fontStyle: "italic",
                }}
              >
                {passwordError}
              </p>
            )}
          </label>
        </div>

        <button
          style={{
            marginTop: "10px",
            padding: "20px",
            width: "100%",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Forms;

// event={
//     target:{
//         value:"a"
//     }
// }

// console.log(event.target.value)