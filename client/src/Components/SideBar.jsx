import React from 'react';


function SideBar() {
    return (
        <React.Fragment>


<div className="d-flex flex-column flex-shrink-0 p-3 bg-light shadow" style={{width:"15%",height:"100vh"}}>
<span className="fs-4">Menu</span>
<hr></hr>
<ul className='nav nav-pills flex-column mb-auto'>
    <li className="nav-item">
        <a href='' className="nav-link active">
        <i className="bi bi-person-plus-fill pe-none me-2"></i>
        Add User
        </a>
    </li>
    <li className="nav-item">
        <a  href='' className="nav-link">
            <i className="bi bi-people-fill pe-none me-2"></i>
            View Users
        </a>
    </li>
    
</ul>
<hr></hr>
<p>Go Mobit LLC</p>
</div>
    

        </React.Fragment>

     );
}

export default SideBar;