import React,{useEffect,useState} from 'react'
import axios from 'axios'


function TestPage() {
    const [state,setState]=useState();
    

    const handleSend = () => {
      console.log("from test",entry)
      axios
        .post(url, entry)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    };

    const entry= {"Name":"JZBOIIII","Email":"jz@jz.com","Mobile Number":"+923335967911","Age":"22"}

    const url="http://localhost:5000/api/post"
    

    return ( 
        <React.Fragment>
            <div className="d-grid justify-content-center align-items-center p-5">
            <button className='btn btn-primary' onClick={handleSend}>Send stuff</button>
            </div>
        </React.Fragment>
     );
}

export default TestPage;