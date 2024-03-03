<?php
// Allow requests from any origin (you can restrict it to specific origins)
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Allow-Headers: Content-Type");

// Assuming you have a class or function to handle user signup
require_once("User.php");

$controller = new User();
		
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle POST requests for adding/updating items
    $requestData = json_decode(file_get_contents('php://input'), true);
    
    if (isset($requestData['action'])) {
        $action = $requestData['action'];
        
        if ($action === 'addUser') {
         // Extract attributes from the request data
        $username = $requestData['username'];
        $password = $requestData['password'];
		$securityQuestion = $requestData['securityQuestion'];
		$securityAnswer = $requestData['securityAnswer'];
		//$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
		
        // Call a method to handle user signup
		 $controller->createAccount($username, $password, $securityQuestion, $securityAnswer) ;
        //$controller->createAccount($username, $hashedPassword, $securityQuestion, $securityAnswer) ;
		
        }else if($action === 'login') {
         // Extract attributes from the request data
        $username = $requestData['username'];
        $password = $requestData['password'];
       
		//$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $controller->logInTheAccout($username, $password );
		//$controller->logInTheAccout($username, $hashedPassword );
        }
		
    }
}

$password = "asd123";
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

//$controller->createAccount("Manyane", "asd123", "What is your favorate dish", "Sephatlo");
//$controller->createAccount("Manyane", $hashedPassword, "What is your favorate dish", "Sephatlo");

$controller->logInTheAccout("Manyane", "asd123");
 //$controller->logInTheAccout("Manyane", $hashedPassword);