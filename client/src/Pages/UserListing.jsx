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
            

            <div className="accordion w-100" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="w-100 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Display Users (CLICK HERE)
                    </button>
                </h2>
                <div className="accordion-collapse collapse show" id="collapseOne">
                    <div className="accordion-body">
                        <ul className="pt-5" style={{width:"75vw"}}>
                            <div className="form-check ms-3 mb-3">
                                <input className="form-check-input mt-1" type="checkbox" value="" id="flexCheckChecked" checked/>
                                <label  className='form-check-label' htmlFor="flexCheckChecked fs-1">Show All Records</label>
                            </div>
                            
                            <div className='d-flex flex-row'>
                                <input type="text" className='form-control ms-3 me-5' placeholder='Search for specific name'/>
                                <button className='btn btn-primary me-5' style={{width:"12em"}}><i className="bi bi-search pe-none me-2"></i>Search</button>
                            </div>
                            <hr/>
                            <div className='MYTABLE'>
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
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            </div>

            </div>
            </div>
        </React.Fragment>
     );}
}

export default UserListing;