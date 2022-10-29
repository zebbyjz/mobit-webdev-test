import React,{useEffect,useState} from 'react';
import SideBar from '../Components/SideBar';
import { Link } from 'react-router-dom';
import axios from 'axios'

function UserListing() {
    const[data,setData]=useState();
    const[isLoading,setLoading]=useState(true);
    let url="http://localhost:5000/api/getUsers";
    
    const fetchData = async () => {
      await axios
        .get(url)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((error) => console.log(error.message));
    };


    useEffect(() => {
      fetchData();
    }, []);
    
    if(isLoading){return(<React.Fragment>
        <div className="d-flex flex-row">
            <SideBar></SideBar>
            
            <div className="d-grid m-5 justify-content-center" style={{ width: "100%" }}>
                <h1>Fetching Data</h1>
            </div>
            </div>
    </React.Fragment>)}

    else{return ( 
        <React.Fragment>
            <div className="d-flex flex-row">
            <SideBar></SideBar>
            
            <div className="d-grid m-5 " style={{ width: "100%" }}>
            

            <div className="dropdown-center w-100">
            <button className="w-100 btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Display Users
            </button>
            <ul className="dropdown-menu" style={{width:"75vw"}}>
                
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className='text-center'>ID</th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Cell Number</th>
                            <th className='text-center'>Created At</th>
                            <th className='text-center'>Is Deleted</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {data.map( (record)=>{
                            return <tr key={record._id}>
                            <td className='text-center'>{record._id}</td>
                            <td className='text-center'>{record.Name}</td>
                            <td className='text-center'>{record.Email}</td>
                            <td className='text-center'>{record["Mobile Number"]}</td>
                            <td className='text-center'>{new Date(record.createdAt).toLocaleString()}</td>
                            <td className='text-center'>{"No"}</td>
                            </tr>
                        } )}
                    </tbody>
                </table>
            </ul>
            </div>


            </div>
            </div>
        </React.Fragment>
     );}
}

export default UserListing;