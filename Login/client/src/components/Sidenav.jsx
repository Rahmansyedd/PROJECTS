import React from 'react'
import './Sidenav.css'
import { Link } from 'react-router-dom'

function Sidenav() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='bg-dark col-auto col-md min-vh-100 d-flex justify-content-between flex-column'>
                    <div>
                        <a className='text-decoration-none text-white  d-none d-sm-inline d-flex align-item-center ms-5 mt-3'>
                            {/* <span className='ms-2 fs-3 d-none d-sm-inline'>logo</span> */}
                            <div className=' ms-5 mt-4 '>
                            <img  src="safe.png" alt="safe" style={{height:"70px"}}/>
                            </div>
                        </a>
                        <div className="dropdown open">
                        <a
                            className="text-decoration-none text-white p-3 ms-1"
                            type="button"
                            id="triggerId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <span className='ms-2 d-none d-sm-inline'>syed Rahman</span>
                            <i className='bi bi-power'></i>
                        </a>
                        {/* <div className="dropdown-menu" aria-labelledby="triggerId">
                            <a className="dropdown-item" href="#">
                                <span className='d-sm-inline'>1</span>
                                <span className='d-none d-sm-block'>1.Profile</span></a>
                            <a className="dropdown-item " href="#">
                                <span className='d-sm-inline'>2</span>
                                <span className='d-none d-sm-block'>Settings</span></a>
                        </div> */}
                    </div>
                        <hr className='text-secoundary d-none d-sm-block' />
                        
                        <ul className="nav nav-pills flex-column mt-3 mt-sm-0 ">
                            <li className="nav-item text-white fs-4 my-1 py-sm-0">
                                <Link to="/" className="nav-link text-white fs-5" aria-current="page">
                                    <i className='bi bi-speedometer2'> </i>
                                    <span className='ms-3 d-none d-sm-inline'>Dashboard</span>
                                </Link>
                            </li>
                            {/* <li className="nav-item text-white fs-4 my-1 py-sm-0">
                                <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                    <i className='bi bi-house'> </i>
                                    <span className='ms-3 d-none d-sm-inline'>Home</span>
                                </a>
                            </li> */}
                            <li className="nav-item text-white fs-4 my-1 py-sm-0">
                                <Link to="/forms" className="nav-link text-white fs-5" aria-current="page">
                                    <i className='bi bi-table'> </i>
                                    <span className='ms-3 d-none d-sm-inline'>Forms</span>
                                </Link>
                            </li>
                            <li className="nav-item text-white fs-4 my-1 py-sm-0">
                                <Link to="/submissions" className="nav-link text-white fs-5" aria-current="page">
                                    <i className="bi bi-list-ul"> </i>
                                    <span className='ms-3 d-none d-sm-inline'>Submissions</span>
                                </Link>
                            </li>
                            <li className="nav-item text-white fs-4 my-1 py-sm-0">
                                <Link to="/inbox" className="nav-link text-white fs-5" aria-current="page">
                                    <i className='bi bi-grid'> </i>
                                    <span className='ms-3 d-none d-sm-inline'>Inbox</span>
                                </Link>
                            </li>
                            <li className="nav-item text-white fs-4 my-1 py-sm-0">
                                <Link to="/documents" className="nav-link text-white fs-5" aria-current="page">
                                    <i className="bi bi-file-text"></i>
                                    <span className='ms-3 d-none d-sm-inline'>Documents</span>
                                </Link>
                            </li>
                           
                        </ul>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Sidenav
