import React from 'react';
import { Link } from 'react-router-dom';



function SideBar(props) {

    const styleActive=' active';

    return (
        <React.Fragment>


<div className="d-flex flex-column flex-shrink-0 p-3 bg-light shadow" style={{width:"15%",height:"100vh"}}>
<span className="fs-4">Menu</span>
<hr></hr>
<ul className='nav nav-pills flex-column mb-auto'>
    <li className={"nav-item"}>
        <Link to="/" className="nav-link">
        <i className="bi bi-person-plus-fill pe-none me-2"></i>
        Add User
        </Link>
    </li>
    <li className="nav-item">
        <Link to="/list" className="nav-link">
        <i className="bi bi-people-fill pe-none me-2"></i>
        View Users
        </Link>
    </li>
    
</ul>
<hr></hr>
<p>Go Mobit LLC</p>
</div>
    

        </React.Fragment>

     );
}

export default SideBar;