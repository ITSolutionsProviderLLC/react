import React from 'react'
import logo from "../images/home (3).png"
import logo1 from "../images/man-shape.png"

const Navbar = () => {
    return (
        <div>
            <div class="navbar">


                <div class="nav-header">
                    <div class="nav-logo">
                        <img src={logo} style={{ height: 50, width: 50 }} />
                    </div>
                </div>


                <input type="checkbox" id="nav-check" />
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>


                <div class="nav-links">
                    <a href="#">New</a>
                    <a href="#">Used</a>


                    <div class="dropdown">
                        <a class="dropBtn" href="#">Services
                            <i class="fas fa-angle-down"></i>
                        </a>
                        <div class="drop-content">
                            <a href="#">Web Design</a>
                            <a href="#">Marketing</a>
                            <a href="#">WordPress</a>

                            <div class="dropdown2">
                                <a class="dropBtn2" href="#">More
                                    <i class="fas fa-angle-right"></i>
                                </a>
                                <div class="drop-content2">
                                    <a href="#">HTML</a>
                                    <a href="#">CSS</a>
                                    <a href="#">JavaScript</a>
                                    <a href="#">jQuery</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="#">Finance</a>
                    <a href="#">About</a>
                    <a href="#">Search</a>
                    
                   < a href="#">
                        
                                <img src={logo1} style={{ height: 30, width: 30 }} />
                               </a>

                </div>
             

            </div>
        </div>
    )
}

export default Navbar