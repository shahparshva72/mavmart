import React, {useContext, useState} from 'react'
import { NavLink, useNavigate} from "react-router-dom";
import { Link } from "react-router-dom"
import {UserContext} from "./AppContext/UserContext";



export default function Navbar() {

    const {value, setValue} = useContext(UserContext);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate()



    return <nav>
    <div class="nav-left">
        <ul >
            <li class="item logo"><Link href="/home">MavMart</Link></li>
            <li class="item"><Link href="/home"><i class="fa-solid fa-cart-shopping"></i></Link></li>
        </ul>
    </div>
    <div class="nav-right">
        <ul>
            <li class="item"><Link to="/home">Home</Link></li>
            <li class="item"><Link to="/aboutus">About Us</Link></li>
            <li class="item"><Link to="/services">Services</Link></li>
            <li class="item"><Link to="/contactus">Contact Us</Link></li>
            <li class="item"><a href="https://gxs1865.uta.cloud/blog/" target="_blank">Blog </a></li>
            <li class="item"><input type="text" placeholder="Search"></input></li>
            <li class="item"><Link to="/login"><i class="fa-solid fa-magnifying-glass"></i>Login</Link></li>
            {/* <li class="item"><Link ><i class="fa-solid fa-user"></i></Link></li> */}

        </ul>
    </div>
</nav>
}
