function login(event) {
    console.log(event.target.form[0].value)
    const emailIds = {
        "student@uta.edu": "https://hls3423.uta.cloud/assignment2/pages/userprofile.html",
        "business@uta.edu": "https://hls3423.uta.cloud/assignment2/pages/businessownerprofile.html",
        "schooladmin@uta.edu": "https://hls3423.uta.cloud/assignment2/pages/adminprofile.html",
        "superadmin@uta.edu": "https://hls3423.uta.cloud/assignment2/pages/superadminprofile.html"
    }

    if(emailIds[event.target.form[0].value]){
        window.location = emailIds[event.target.form[0].value];
    } else {
        alert("No such account exists")
    }



}