import React, {useContext, useState} from 'react'
import { NavLink, useNavigate} from "react-router-dom";


export default function StudentDashboard() {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate()

    if(!isLoggedIn) {
        navigate('/login')
    }
    return <>
    <div class="container">
            <h2 class="font-4em color-brown">User Dashboard </h2>
        
            <div class="container-white">
                <div class="product-container">
                    <div>
                        <h2 class="font-3em color-brown">Products </h2>
                    </div>
                    <div>
                    </div>
                    
                </div>
                

                <div class="product-container">
                    <div class="card">
                        <img src="../images/download.jpeg" alt="Avatar" class="width-100percent"/>
                        <button class="button-primary">Details</button>
                        <button class="margin-auto button-primary">Add to cart</button>
                        <div>
                            <label>Quantity:</label>
                            <input type="number"  id="quantity1" name="quantity" min="1" max="5" class="width-20percent"/>

                        </div>

                    </div>
                    <div class="card">
                        <img src="../images/download.jpeg" alt="Avatar" class="width-100percent"/>
                        <button class="button-primary">Details</button>
                        <button class="margin-auto button-primary">Return</button>
                        <div>
                            <label>Quantity:</label>
                            <input type="number"  id="quantity2" name="quantity" min="1" max="5" class="width-100percent"/>

                        </div>
                    </div>
                    <div class="card">
                        <img src="../images/download.jpeg" alt="Avatar" class="width-100percent"/>
                        <button class="button-primary">Details</button>
                        <button class="margin-auto button-primary">Add to cart</button>
                        <div>
                            <label>Quantity:</label>
                            <input type="number"  id="quantity3" name="quantity" min="1" max="5" class="width-20percent"/>

                        </div>
                    </div>
                </div>
            </div>
            <div class="container-white">
                <h2 class="font-3em color-brown">Clubs </h2>
                <div class="product-container">
                    <div class="card">
                        <img src="../images/club.png" alt="Avatar" class="width-100percent"/>

                        <button class="button-primary">Details</button>
                        <button class="button-primary margin-auto">Join</button>

                    </div>
                    <div class="card">
                        <img src="../images/club.png" alt="Avatar" class="width-100percent"/>
                        <button class="button-primary">Details</button>
                        <button  class="button-primary margin-auto">Join</button>

                    </div>
                    <div class="card">
                        <img src="../images/club.png" alt="Avatar" class="width-100percent"/>
                        <button class="button-primary">Details</button>
                        <button class="margin-auto button-primary" >Join</button>

                    </div>
                </div>
            </div>
          </div>
    </>
}