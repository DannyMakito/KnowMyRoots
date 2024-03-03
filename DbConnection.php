<?php

class DbConnection {

	// Database configuration
	private $host = 'localhost'; // Change to your database host
	private $dbname = 'knowmyroots'; // Change to your database name
	private $username = 'root'; // Change to your database username
	private $password = ''; // Change to your database password


		
	public function connect() {
			
		try {
			$dsn = "mysql:host={$this->host};dbname={$this->dbname}";
			// Create a PDO instance
			$pdo = new PDO($dsn, $this->username, $this->password);

			// Set PDO to throw exceptions on errors
			$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

			// Additional PDO configuration options if needed
			 $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
			 
			 

			//echo "Connected to the database successfully!";
		} catch (PDOException $e) {
			die("Connection failed: " . $e->getMessage());
		}
		
		return $pdo;
	}
	
	
}

$a = new DbConnection();
$a->connect();
?>
