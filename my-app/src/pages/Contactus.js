export default function Contactus() {
    return  <div class="container">
            <h2 class="font-4em color-brown">Contact Us </h2>
            <form action="/action_page.php">
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name"></input>
          
              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name"></input>
          
              <label for="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Your email"></input>

          
              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." class="height-200px"></textarea>
          
              <input type="submit" value="Submit"></input>
            </form>
          </div>

}