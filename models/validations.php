<?php

Class Validate {
    
    private $db;
    
    public function __construct($conn) {
        $this->db = $conn;
    }
    
    //////////////////////////////////////////////////////////
    //Returns validated email or throws an error
    public function emailValidate($email) {
        
        if(empty($email)) {
            return 'Email is blank';
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return 'Invalid email';
        } elseif(strlen($email) > 64) {
            return 'Email is too long';
        } else {
            $email = strip_tags($email);
            
            //Query database for duplicate email
            $stmt = $this->db->prepare("SELECT email FROM users WHERE email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->store_result();
            
            //If duplicate email, throw error, else return email
            if ($stmt->num_rows != 0) {
                return 'Email is already in use';        
            }
            
        }
        
    }

    ////////////////////////////////////////////////////////
    //Returns validated password or throws an error
    public function passwordValidate($pass, $pass2) {
        
        if (empty($pass) || empty($pass2)) {
            return 'Password is blank';
        } elseif (strlen($pass) < 6) {
            return 'Password is too short';
        } elseif ($pass !== $pass2) {
            return 'Passwords do not match';
        }
        
    }

    ////////////////////////////////////////////////////////
    //check if field is empty
    public function requiredfield($field) {
        if(empty($field)) {
            return 'Please provide a ' . $field;
        } 
    }
    
}
