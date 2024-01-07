export default function BusinessProfile() {
    return <>
    <div class="container">
            <h2 class="color-brown">Business profile </h2>
        
            <div class="container-white">
                <h2 class="color-brown">Explore Products</h2>
                <div class="product-container">
                    
                    <br/>
                    <div class="card">
                        <img src="../images/download.jpeg" alt="Avatar" class="width-100percent"/>
                        <button class="button-primary">Details</button>
                        <button class="margin-auto button-primary">Add to cart</button>
                        <div>
                            <label >Quantity:</label>
                            <input type="number"  id="quantity1" name="quantity" min="1" max="5" class="width-20percent"/>

                        </div>

                    </div>
                    <div class="card">
                        <img src="../images/download.jpeg" alt="Avatar" class="width-100percent"/>
                        <button class="button-primary">Details</button>
                        <button class="margin-auto button-primary">Add to cart</button>
                        <div>
                            <label >Quantity:</label>
                            <input type="number"  id="quantity2" name="quantity" min="1" max="5" class="width-20percent"/>

                        </div>
                    </div>
                    <div class="card">
                        <img src="../images/download.jpeg" alt="Avatar" class="width-100percent"/>
                        <button class="button-primary">Details</button>
                        <button  class="margin-auto button-primary">Add to cart</button>
                        <div>
                            <label>Quantity:</label>
                            <input type="number"  id="quantity3" name="quantity" min="1" max="5" class="width-20percent"/>

                        </div>
                    </div>
                </div>
                
                <div class="product-container">
                    <div>
                        <h2 class="color-brown">Create Product</h2>
                    </div>
                    
                </div>

                <form action="/action_page.php">
                    <label >Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Product name"/>
                
                    <label >Description</label>
                    <input type="text" id="description" name="description" placeholder="Product description"/>
                
                    <label >Cost</label>
                    <input type="text" id="cost" name="cost" placeholder="Product cost"/>
      
                
                    <label >Quantity</label>
                    <input type="text" id="quantity" name="quantity" placeholder="Product Quantity"/>
                
                    <input type="submit" value="Add Product"/>
                </form>
                <br/> 
                <br/>
                <h2 class="color-brown">Products List</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Cost</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>
                            Product 1
                        </td>
                        <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </td>
                        <td>
                            $123
                        </td>
                        <td>
                            5
                        </td>
                        <td>
                            <ul>
                                <li><button>Delete</button></li>
                                <li><button>Edit</button></li>
                            </ul>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            Product 2
                        </td>
                        <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </td>
                        <td>
                            $56
                        </td>
                        <td>
                            5
                        </td>
                        <td>
                            <ul>
                                <li><button>Delete</button></li>
                                <li><button>Edit</button></li>
                            </ul>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            Product 2
                        </td>
                        <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </td>
                        <td>
                            $100
                        </td>
                        <td>
                            5
                        </td>
                        <td>
                            <ul>
                                <li><button>Delete</button></li>
                                <li><button>Edit</button></li>
                            </ul>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            Product 3
                        </td>
                        <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </td>
                        <td>
                            $175
                        </td>
                        <td>
                            5
                        </td>
                        <td>
                            <ul>
                                <li><button>Delete</button></li>
                                <li><button>Edit</button></li>
                            </ul>

                        </td>
                    </tr>
                </table>
                
            </div>
            <div class="container-white">
                <h2 class="font-3em color-brown">Advertisement </h2>
                <div class="product-container">
                    <div>
                        <h2 class="color-brown">Create Advertisement</h2>
                    </div>
                    
                </div>

                <form action="/action_page.php">
                    <label >Name</label>
                    <input type="text" id="fname1" name="firstname" placeholder="Product name"/>
                
                    <label >Description</label>
                    <input type="text" id="lname1" name="lastname" placeholder="Product description"/>
                
                    <label >Image</label>
                    <input type="file" id="image1" name="image"/>
      
                
                    <input type="submit" value="Add Advertisement"/>
                </form>
                <br/>

                <h2 class="color-brown">Your advertisements</h2>
                <div class="product-container">
                    <div class="card">
                        <img src="../images/ad.jpeg" alt="Avatar" class="width-100percent"/>

                        <button  class="margin-auto button-primary">Delete</button>
                        <button  class="margin-auto button-primary">Publish</button>

                    </div>
                    <div class="card">
                        <img src="../images/ad.jpeg" alt="Avatar" class="width-100percent"/>
                        <button class="button-primary">Delete</button>
                        <button class="margin-auto button-primary">Publish</button>

                    </div>
                    <div class="card">
                        <img src="../images/ad.jpeg" alt="Avatar" class="width-100percent"/>
                        <button class="button-primary">Delete</button>
                        <button class="margin-auto button-primary">Publish</button>

                    </div>
                </div>
            </div>
          </div>
    </>
}