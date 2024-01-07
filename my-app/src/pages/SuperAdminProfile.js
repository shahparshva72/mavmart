export default function SuperAdminProfile() {
    return <>
    <div class="container">
            <h2 class="color-brown">Super Admin Profile </h2>
        
            <div class="container-white"> 

                <div class="display-flex">
                    <div class="profileBox1">
                        <img src="../images/johndoe.jpeg" alt="Avatar" class="width-100percent"/>

                    </div>
                    <div class="profileBox2">
                        <form action="/action_page.php">
                            <label >Name</label>
                            <input type="text" id="fname" name="firstname" />
                        
                            <label >Last Name</label>
                            <input type="text" id="lname" name="lastname" />
                        
                            <label >Email</label>
                            <input type="text" id="email" name="email" />

                            <label for="phone">Phone</label>
                            <input type="text" id="phone" name="phone" />
                        
                            <input type="submit" />
                        </form>

                    </div>
                </div>
                
            </div>
            
            
          </div>
    </>
}