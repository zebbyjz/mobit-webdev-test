import React from 'react'
import SideBar from '../Components/SideBar';




const input_schema = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "Personal Name",
      value: "",
      label: "Name",
      required:"required"
    },

    {
      id: 2,
      name: "Email",
      type: "email",
      placeholder: "Enter E-mail address",
      value: "",
      label: "Email",
      required:"required"
    },

    {
      id: 3,
      name: "Mobile Number",
      type: "number",
      placeholder: "Add Mobile Number with Country Code",
      value: "",
      label: "Mobile Number",
    },
    {
        id:4,
        name:"Age",
        type:"number",
        placeholder:"Enter your Age (18-60)",
        value:"",
        label:"Age"

    }
  ];

  const onSubmitUser=()=>{

  }

function AddUser() {
    return ( 
        <React.Fragment>
            <div className="d-flex flex-row">
                <SideBar></SideBar>
                
                <div className="container mt-5 ms-5 w-50" >
                    <h1 className='mb-5'>User Form Details</h1>
                    
                    <form onSubmit={onSubmitUser}>

                        {input_schema.map( (_input)=>{
                                return <React.Fragment>
                                    <label htmlFor={_input.id}>{_input.label}</label>
                                    <input
                                    key={_input.id}
                                    id={_input.id}
                                    type={_input.type}
                                    name={_input.name}
                                    placeholder={_input.placeholder}
                                    className="form-control mb-3"
                                    ></input>
                                </React.Fragment>
                        } )}

                        <button className='btn btn-success mt-5' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
     );
}

export default AddUser;