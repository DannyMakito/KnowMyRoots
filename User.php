<?php
include 'DbConnection.php';
class User extends DbConnection {
	
  public function createAccount($userName, $password, $securityQuestion, $securityAnswer) 
  {
      $addUserStatus = false;
	  $sql = "INSERT INTO user_tbl (username, password, security_question, security_question_answer)
				VALUES (?,?,?,?)";
				$stmt = $this->connect()->prepare($sql);
		$stmt->execute([$userName, $password, $securityQuestion, $securityAnswer]);
		
		$addUserStatus = true;
		echo json_encode(['status' => $addUserStatus]);
  }
  
    

 public function logInTheAccout($username, $password)  {
		$sql = "SELECT password FROM user_tbl WHERE username = ?";

		$stmt = $this->connect()->prepare($sql);
		$stmt->execute([$username]);
		$result = $stmt->fetch(PDO::FETCH_ASSOC);

	
        $hashedPassword = $result['password'];
		
		if ($password == $hashedPassword) {
	    
			echo json_encode(['status' => true]);
		} else {
			echo json_encode(['status' => false]);
		}

	   /*if ($result && password_verify($password, $hashedPassword)) {
	    
		echo "logged IN";
			echo json_encode(['status' => true]);
		} else {
			echo "DO NOT MATCG";
			echo json_encode(['status' => false]);
		}
		*/

        
  }	

}



 ?>
 



