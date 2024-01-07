<?php

include "config.php";
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $otp = $request->otp;
    $password = $request->password;
    $email = $request->email;
    $select = " SELECT * FROM users WHERE email = '$email' && token = '$otp' ";
    $result = mysqli_query($conn, $select);
    if(mysqli_num_rows($result) > 0){
        $update = "UPDATE users SET password='$password', token = NULL WHERE email='$email'";
        if(mysqli_query($conn, $update)){
            echo json_encode(array(
                "Success" => 'Password Changed'
            ));
        }else{
            echo json_encode(array(
                "Error" => 'Unable to update password'
            ));
        }
        
    }else{
        echo json_encode(array(
            "Error" => 'Invalid old password'
        ));
    }
}else{
    echo json_encode(array(
        "Error" => 'Error!!'
    ));
}
?>