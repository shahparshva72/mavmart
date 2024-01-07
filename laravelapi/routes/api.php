<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/register.php', function (Request $request) {
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
});

Route::get('/login.php', function (Request $request) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    include 'config.php';

    $postdata = file_get_contents("php://input");
    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);
        $email = $request->email;
        $password = $request->password;
        $select = " SELECT email, firstName, lastName, role FROM users WHERE email = '$email' && password = '$password' ";
        $result = mysqli_query($conn, $select);
        if (mysqli_num_rows($result) > 0) {
            $result = mysqli_fetch_array($result);
            $result = json_encode($result);
            http_response_code(200);
            echo '{"userData": ' . $result . '}';

        } else {
            http_response_code(422);
            echo '{"error":"Invalid username and password"}';
        }
    }

});

Route::get('/forgotpassword.php', function (Request $request) {
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    require base_path("vendor/autoload.php");

    include "dbConfig.php";


    $email = $request["email"];
    $sql = "SELECT * FROM person WHERE email = '$email'";
    $res = mysqli_query($conn, $sql);
    $count = mysqli_num_rows($res);
    if ($count == 1) {
        $r = mysqli_fetch_assoc($res);
        $password = $r['password'];
        $firstname = $r['first_name'];
        $mail = new PHPMailer(true);
        try {
            //Server settings
            //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host = 'smtp.gmail.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth = true;                                   //Enable SMTP authentication
            $mail->Username = 'wdmsmtp2022@gmail.com';                     //SMTP username
            $mail->Password = 'arnqzxvlrliajoyj';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //Recipients
            $mail->setFrom('wdmsmtp2022@gmail.com', 'Mailer');
            $mail->addAddress($email);     //Add a recipient
            //$mail->addAddress('ellen@example.com');               //Name is optional
            //$mail->addReplyTo('info@example.com', 'Information');
            //$mail->addCC('cc@example.com');
            //$mail->addBCC('bcc@example.com');

            //Attachments
            //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = "Your Recovered Password";
            $mail->Body = "Hi $firstname, Please use this password to login " . $password;


            if ($mail->Send()) {
                echo json_encode(array(
                    "Success" => 'An email has been sent to your email address'
                ));
            }
        } catch (Exception $e) {
            echo json_encode(array(
                "Error" => 'Message could not be sent. Mailer Error'
            ));
        }

    } else {
        echo json_encode(array(
            "Error" => 'Email Id not found in our database'
        ));
    }

});

Route::get('/child.php', function (Request $request) {

    include "config.php";


    header("Access-Control-Allow-Origin: http://localhost:3000");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
    require 'vendor/autoload.php';

    $postdata = file_get_contents("php://input");

    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);
        $email = $request->email;
        $sql = "SELECT * FROM users WHERE email = '$email'";
        $res = mysqli_query($conn, $sql);
        $count = mysqli_num_rows($res);
        if ($count == 1) {
            $r = mysqli_fetch_assoc($res);
            $firstname = $r['firstName'];
            $password = $r['password'];
            $mail = new PHPMailer(true);

            // Generate 6 digit otp and save in db
            $otp = mt_rand(100000, 999999);

            $sql = "UPDATE users SET token = '$otp' WHERE email='$email'";
            $res = mysqli_query($conn, $sql);

            try {
                //Server settings
                //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
                $mail->isSMTP();                                            //Send using SMTP
                $mail->Host = 'smtp.gmail.com';                     //Set the SMTP server to send through
                $mail->SMTPAuth = true;                                   //Enable SMTP authentication
                $mail->Username = 'wdmfall2022@gmail.com';                     //SMTP username
                $mail->Password = 'lkzaynnedprxchqt';                               //SMTP password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;//PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
                $mail->Port = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

                //Recipients
                $mail->setFrom('wdmfall2022@gmail.com', 'Mailer');
                $mail->addAddress($email);     //Add a recipient
                //$mail->addAddress('ellen@example.com');               //Name is optional
                //$mail->addReplyTo('info@example.com', 'Information');
                //$mail->addCC('cc@example.com');
                //$mail->addBCC('bcc@example.com');

                //Attachments
                //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
                //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

                //Content
                $mail->isHTML(true);                                  //Set email format to HTML
                $mail->Subject = "Your Recovered Password";
                $mail->Body = "Hi $firstname, Please use this otp to reset your password " . $otp;


                if ($mail->Send()) {
                    echo json_encode(array(
                        "Success" => 'An email has been sent to your email address'
                    ));
                }
            } catch (Exception $e) {
                echo json_encode(array(
                    "Error" => 'Message could not be sent. Mailer Error'
                ));
            }


        } else {
            echo json_encode(array(
                "Error" => 'Email Id not found in our database'
            ));
        }
    }

});
