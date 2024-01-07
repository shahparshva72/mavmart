export default function StudentProfile() {
    return <>
    <div class="container">
            <h2 class="color-brown">Student Profile </h2>
        
            <div class="container-white"> 

                <div class="display-flex">
                    <div class="profileBox1">
                        <img src="../images/johndoe.jpeg" alt="Avatar" class="width-100percent"></img>

                    </div>
                    <div class="profileBox2">
                        <form action="/action_page.php">
                            <label>Name</label>
                            <input type="text" id="fname" name="firstname" ></input>
                        
                            <label >Last Name</label>
                            <input type="text" id="lname" name="lastname" ></input>
                        
                            <label >Email</label>
                            <input type="text" id="email" name="email" ></input>
              
                            <label >University</label>
                            <input type="text" id="university" name="university" ></input>

                            <label >Phone</label>
                            <input type="text" id="phone" name="phone" ></input>
                        
                            <input type="submit" value="Update profile"></input>
                        </form>

                    </div>
                </div>
                
            </div>
            
            
          </div>
    </>
}