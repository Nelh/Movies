<?php

Class FavouriteMovie {

    private $db;
    private $user_id;

    public function __construct($conn){
        $this->db = $conn;
        $this->user_id = $_SESSION['id'];

    }

    // Add to favourites
    public function add($movie_id, $movie_type)
    {
        // Check if that Movie already in favourite
        $stmt = $this->db->prepare("SELECT `user_id`, `movie_id` FROM user_movies WHERE `user_id` = ? AND `movie_id` = ?");
        $stmt->bind_param("ss", $this->user_id, $movie_id);
        if($stmt->execute()) {
            $stmt->store_result();
            if($stmt->num_rows > 0) {
                return "Movie already inserted as favourite";
            } else {
                // insert New favourite Movie
                $stmt = $this->db->prepare("INSERT INTO user_movies (user_id, movie_id, movie_type) VALUES (?,?,?)");
                $stmt->bind_param("sss",$this->user_id, $movie_id, $movie_type);
                if($stmt->execute()) {
                    return true;
                } else {
                    return $stmt->error;
                }
            }
        } else {
            return $stmt->error;
        }
        $stmt->free_result();
        $stmt->close();
    }

    // Remove from favourites
    public function remove($movie_id)
    {
        $stmt = $this->db->prepare("DELETE FROM user_movies WHERE  `user_id` = ? AND `movie_id` = ?");
        $stmt->bind_param("ss", $this->user_id, $movie_id);
        if($stmt->execute()) {
            return true;
        } else {
            return $stmt->error;
        }
        $stmt->free_result();
        $stmt->close();
    }
}



?>