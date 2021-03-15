# table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `password`) VALUES
(27, 'Armstrong', 'Nouni', 'nelh@gmail.com', '$2y$10$GNN8N2WRbwWj8ywyMs4raul79cl6w/kAntJKvXu6jq2IopHfaU7Em');


# table user movies
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_movies`;

CREATE TABLE `user_movies` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `movie_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `movie_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_movies_user_id_index` (`user_id`),
  KEY `user_movies_movie_id_index` (`movie_id`),
  CONSTRAINT `user_movies_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
