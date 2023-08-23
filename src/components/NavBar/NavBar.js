import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'



const NavBar = () => {
    return(
        <div className="container" id="navbar">
            <div className="row">
                        <div className="col-6">
                            <nav className="navbar navbar-expand-lg ">
                                <div className="container-fluid">
                                    <Link className="navbar-brand" to={"/"}><img src="https://img.freepik.com/vector-gratis/diseno-logotipo-tienda-movil-degradado_23-2149699859.jpg?w=826&t=st=1691875097~exp=1691875697~hmac=4410859f137a60c52413923692ef7a67c3e400c594d6d8c06cee4a09e3218907" alt="tecnomaxi" width={100} /></Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to={"/category/celulares"} >Celulares</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/notebooks"}>Notebooks</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/auriculares"}>Auriculares</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="justify-content-end  align-items-center" to={"/cart"}><CartWidget/></Link>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        
            </div>
        </div>
        
            
    )
}

export default NavBar;

