<?php

class User {

    private $db;
    private $user_id;
    
    public function __construct($conn) 
    {
        $this->db = $conn;
        $this->user_id = $_SESSION['id'];
    }

    ////////////////////////////////////////////
    // get user movie

    public function getUserMovie()
    {
        $stmt = $this->db->prepare("SELECT movie_id, movie_type FROM user_movies WHERE `user_id` = ?");
        $stmt->bind_param("s",$this->user_id);
        $stmt->execute();
        $stmt->store_result();

        $stmt->bind_result($movie_id, $movie_type);

        if($stmt->num_rows < 1) {
            return [];
        }
        $results = array();
        while ($stmt->fetch()) {
            $results[] = ['id' => $movie_id, 'type' => $movie_type];
        }

        $stmt->free_result();
        $stmt->close();
        $this->db->close();

        return $results;
    }
}

?>