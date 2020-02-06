CREATE TABLE TypeofVaccination(
    `id` int(11) NOT NULL AUTO_INCREMENT, 
    `vaccinationName` varchar(200) DEFAULT NULL, 
     `vaccinationDescription` varchar(700) DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
    
)ENGINE=InnoDB DEFAULT CHARSET=latin1;