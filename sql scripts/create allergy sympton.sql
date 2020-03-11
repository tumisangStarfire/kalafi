CREATE TABLE AllergySymptom(
   `id` int(11) NOT NULL AUTO_INCREMENT, 
   `allergy_id` varchar(45) DEFAULT NULL,  
    `symptomName` varchar(45) DEFAULT NULL, 
   `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
   `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
    
)ENGINE=InnoDB DEFAULT CHARSET=latin1;