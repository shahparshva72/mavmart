export default function Cart(){
        return <>
        <div class="container">
            <h2 class="color-brown">Your Cart (3) </h2>

            <div class="container-white">
                <div class="product-container">

                    <br/>
                    <div class="card">
                        <img src="../images/download.jpeg" alt="Avatar" class="width-100percent"/>
                        <button class="button-primary">Delete</button>
                        <button class="margin-auto button-primary">Add More</button>
                        <div>
                            <label for="quantity">Quantity:</label>
                            <input type="number"  id="quantity1" name="quantity" min="1" max="5" class="width-20percent" disabled/>

                        </div>

                    </div>
                    <div class="card">
                        <img src="../images/download.jpeg" alt="Avatar" class="width-100percent"/>
                        <button class="button-primary">Delete</button>
                        <button  class="margin-auto button-primary">Add More</button>
                        <div>
                            <label for="quantity">Quantity:</label>
                            <input type="number"  id="quantity2" name="quantity" min="1" max="5" class="width-20percent"  disabled/>

                        </div>
                    </div>
                    <div class="card">
                        <img src="../images/download.jpeg" alt="Avatar" class="width-100percent"/>
                        <button class="button-primary">Delete</button>
                        <button class="margin-auto button-primary">Add More</button>
                        <div>
                            <label for="quantity">Quantity:</label>
                            <input type="number"  id="quantity3" name="quantity" min="1" max="5" class="width-20percent"  disabled/>

                        </div>
                    </div>
                </div>
                <br/>
              </div>
            </div>
    </>
}
