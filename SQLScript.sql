	CREATE TABLE `user_tbl` (
 `user_id` int(11) NOT NULL AUTO_INCREMENT,
 `username` varchar(100) NOT NULL,
 `password` varchar(100) NOT NULL,
 `security_question` varchar(255) NOT NULL,
 `security_question_answer` varchar(255) NOT NULL,
 PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci