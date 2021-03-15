<?php

Class Auth {
    
    private $db;
    
    public function __construct ($conn) {  
        $this->db = $conn;
    }
    
    /////////////////////////////////////////////////////////////
    //Register new user within database
    public function register($fname, $lname, $email, $pass) {  
    
        $passHash = password_hash($pass, PASSWORD_DEFAULT);
        
        $stmt = $this->db->prepare("INSERT INTO users (fname, lname, email, password) VALUES (?,?,?,?)");
        $stmt->bind_param("ssss", $fname, $lname, $email, $passHash);
        
        if($stmt->execute()) {
            return true;
        } else {
            return $stmt->error;
        }
          
    }
    
    ///////////////////////////////////////////////////////////
    //Look for existing user in database
    public function login($email, $pass) {
        
        //Query database for info based on fname or email
        $stmt = $this->db->prepare("SELECT id, fname, lname, email, password FROM users WHERE email = ?");
        $stmt->bind_param("s",$email);
        $stmt->execute();
        $stmt->store_result();
        
        //If info is found get info, else return error
        if ($stmt->num_rows == 1) {            
            $stmt->bind_result($id, $fname, $lname, $email, $passHash);
            $result = $stmt->fetch();
            
            //if password matches setup session, else return error
            if (password_verify($pass, $passHash)) {
                $_SESSION['id'] = $id;
                $_SESSION['fname'] = $fname;
                $_SESSION['lname'] = $lname;
                $_SESSION['email'] = $email;
                $_SESSION['userLoginStatus'] = 1;
                return true;

            } else {
                return 'Wrong password';
            }
            
        } else {
            return 'Wrong fname or email';
        }
        
    }
    
    //////////////////////////////////////////////////////////////
    //Check if user is logged in
    public function isLoggedIn() {
        //Return true if session has been set, false if it hasn't
        if(isset($_SESSION['userLoginStatus'])) {
            return true;
        } else {
            return false;
        }
        
    }
    
    ///////////////////////////////////////////////////////////////
    //Redirect to Home page
    public function redirectHome() {
        header("Location: ../");
    }

    //Redirect to a different page
    public function redirect($url) {
        header("Location: ..$url");
    }

    ///////////////////////////////////////////////////////////////
    // logout - clear session
    public function logout() {
        session_start();
        $_SESSION = array();
        session_destroy();
    }
 
}