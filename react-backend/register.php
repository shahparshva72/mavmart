
<?php

include "config.php";
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    $firstName = $request->firstName;
    $lastName = $request->lastName;
    $email = $request->email;
    $address = $request->address;
    $major = $request->major;
    $password = $request->password;
    $phone = $request->phone;
    $birthDate = $request->birthDate;
    $role = $request->roles;
    $select = " SELECT * FROM users WHERE email = '$email' ";
    $result = mysqli_query($conn, $select);
    if (mysqli_num_rows($result) > 0) {

        echo json_encode(array(
            "Error" => 'User already Exists!',
        ));

    } else {
        $insert = "INSERT INTO `users` (`firstName`, `lastName`, `phone`, `major`, `birthDate`, `role`, `email`, `password`, `address`) VALUES ('$firstName', '$lastName', '$phone', '$major', '$birthDate', '$role', '$email', '$password', '$address')";
        if (mysqli_query($conn, $insert)) {
            http_response_code(201);
            echo json_encode(array(
                "Success" => 'User registered',
            ));
        } else {
            http_response_code(422);
            echo json_encode(array(
                "Error" => 'Error in registration',
            ));
        }

    }
}
?> 