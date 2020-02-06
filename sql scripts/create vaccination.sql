CREATE TABLE Vaccination(
    `id` int(11) NOT NULL AUTO_INCREMENT,  
    `userID` int(11) DEFAULT NULL, 
    `type_of_vacination_id` int(11) DEFAULT NULL,
    `date_administered`  date DEFAULT NULL,
     `medicalFacility` int(11) DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=latin1;
    