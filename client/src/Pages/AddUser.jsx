import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import axios from 'axios'

function AddUser() {
  const defaultSchema = {
    Name: "",
    Email: "",
    "Mobile Number": "",
    Age: "",
    errors: { Email: 0, Age: 0 },
  };


  const [fields, setFields] = useState(defaultSchema);

  const input_schema = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "Personal Name",
      value: fields["Name"],
      label: "Name",
      required: "required",
    },

    {
      id: 2,
      name: "Email",
      type: "email",
      placeholder: "Enter E-mail address",
      value: fields["Email"],
      label: "Email",
      required: "required",
    },

    {
      id: 3,
      name: "Mobile Number",
      type: "text",
      placeholder: "Add Mobile Number with Country Code",
      value: fields["Mobile Number"],
      label: "Mobile Number",
    },
    {
      id: 4,
      name: "Age",
      type: "text",
      placeholder: "Enter your Age",
      value: fields["Age"],
      label: "Age",
    },
  ];

  const onSubmitUser = (event) => {
    event.preventDefault();

    //Making local copy of form data and deleting errors property so we only get user info
    let entry = { ...fields };
    delete entry.errors;
    

    let url = "http://localhost:5000/api/post";
    axios
      .post(url, entry)
      .then((res) => {
        console.log(res);
        alert("Form Submitted Successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Sorry, some error has occurred in the form submission.");
      });
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    let state_copy = { ...fields };
    state_copy[name] = value;

    //Real-time Validation Section
    //error flag = 1 means not allowed
    //error flag = 0 means allowed
    const Regex = RegExp(
      /^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i
    );

    if (state_copy["Age"] < 18 || state_copy["Age"] > 60) {
      state_copy["errors"]["Age"] = 1;
    } else {
      state_copy["errors"]["Age"] = 0;
    }

    if (Regex.test(state_copy["Email"]) === false) {
      state_copy["errors"]["Email"] = 1;
    } else {
      state_copy["errors"]["Email"] = 0;
    }

    setFields(state_copy);
  };

  const renderError = (name) => {
    if (name === "Email" && fields["errors"]["Email"] === 1) {
      return <p style={{ color: "red" }}>Invalid Email Address.</p>;
    }
    if (name === "Age" && fields["errors"]["Age"] === 1) {
      return (
        <p style={{ color: "red" }}>Invalid Age. Must be between 18-60 years</p>
      );
    }
  };

  return (
    <React.Fragment>
      <div className="d-flex flex-row">
        <SideBar></SideBar>

        <div className="container mt-5 ms-5" style={{ width: "30%" }}>
          <h1 className="mb-5">User Form Details</h1>

          <form onSubmit={(event) => onSubmitUser(event)}>
            {input_schema.map((_input) => {
              return (
                <React.Fragment>
                  <div className="FORM-ELEMENT mb-3">
                    <label htmlFor={_input.id}>{_input.label}</label>
                    <input
                      key={_input.id}
                      id={_input.id}
                      value={_input.value}
                      type={_input.type}
                      name={_input.name}
                      placeholder={_input.placeholder}
                      className="form-control"
                      required="required"
                      onChange={(event) => {
                        handleChange(event);
                      }}
                    ></input>
                    {renderError(_input.name)}
                  </div>
                </React.Fragment>
              );
            })}

            <button
              className="btn btn-success mt-5"
              type="submit"
              disabled={
                //Sets submit button to disabled or enabled based on validation status.
                fields.errors.Age === 0 && fields.errors.Email === 0
                  ? false
                  : true
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddUser;
