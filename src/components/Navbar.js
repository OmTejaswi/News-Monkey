import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">NewsMonkey</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Countries
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">India</a></li>
                                        <li><a className="dropdown-item" href="#">United States</a></li>
                                        <li><a className="dropdown-item" href="#">United Kingdom</a></li>
                                        <li><a className="dropdown-item" href="#">Russia</a></li>
                                        <li><a className="dropdown-item" href="#">France</a></li>
                                        <li><a className="dropdown-item" href="#">Australia</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">International</a></li>
                                    </ul>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>

                                <li className="nav-item"><a className="nav-link" href="#">business </a></li>
                                <li className="nav-item"><a className="nav-link" href="#">entertainment </a></li>
                                <li className="nav-item"><a className="nav-link" href="#">general </a></li>
                                <li className="nav-item"><a className="nav-link" href="#">health </a></li>
                                <li className="nav-item"><a className="nav-link" href="#">science </a></li>
                                <li className="nav-item"><a className="nav-link" href="#">sports </a></li>
                                <li className="nav-item"><a className="nav-link" href="#">technology </a></li>
                            </ul>
                            <form className="d-flex">
                                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button> */}

                                <li className="nav-item nav-link dropdown mx-2">
                                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" style={{ color: '#f1f1f1' }} data-bs-toggle="dropdown" aria-expanded="false">
                                        Page Size
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item">5</a></li>
                                        <li><a className="dropdown-item">10</a></li>
                                        <li><a className="dropdown-item">15</a></li>
                                        <li><a className="dropdown-item">20</a></li>
                                    </ul>
                                </li>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar