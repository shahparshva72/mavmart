<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'config.php';

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $email = $request->email;
    $password = $request->password;
    $select = " SELECT email, firstName, lastName, role FROM users WHERE email = '$email' && password = '$password' ";
    $result = mysqli_query($conn, $select);
    if(mysqli_num_rows($result) > 0){
        $result = mysqli_fetch_array($result);
        $result = json_encode($result);
        http_response_code(200);
        echo '{"userData": '.$result.'}';
  
     }else{
            http_response_code(422);
            echo '{"error":"Invalid username and password"}';
        }   
}
?>
