CREATE TABLE `UserProfile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `profilePicture` varchar(400) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `omang` varchar(200) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `bmi` int(11) DEFAULT NULL,
  `bloodType` varchar(200) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;