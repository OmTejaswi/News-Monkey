import React, { Component } from 'react'
import {
    Link,
} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand notranslate" to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                {/* <select id="mySelect">
                                    <option value="in">India</option>
                                    <option value="us">United States</option>
                                    <option value="gb">United Kingdom</option>
                                    <option value="ru">Russia</option>
                                    <option value="fr">France</option>
                                    <option value="au">Australia</option>
                                    <option value="International">International</option>
                                </select> */}

                                <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/feedback">Feedback</Link></li>
                            </ul>
                            <form className="d-flex">
                                <li className="nav-item nav-link"><div id="google_translate_element" style={{ color: 'white', height: '30px', position: 'relative', bottom: '0px' }}></div></li>
                                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id='search'/>
                                <button className="btn btn-outline-success" type="submit">Search</button> */}

                                {/* <li className="nav-item nav-link dropdown mx-2">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="navbarDropdown" role="button" style={{ color: '#f1f1f1' }} data-bs-toggle="dropdown" aria-expanded="false">
                                        Page Size
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item">5</Link></li>
                                        <li><Link className="dropdown-item">10</Link></li>
                                        <li><Link className="dropdown-item">15</Link></li>
                                        <li><Link className="dropdown-item">20</Link></li>
                                    </ul>
                                </li> */}
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar