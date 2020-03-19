import { Router } from "express";
/* const index = require('../public/html') */
import * as bodyParser from 'body-parser';
import { registerBeta } from '../controller/auth/RegisterController';
import { registerUser } from '../controller/auth/RegisterController';
import { login } from '../controller/auth/LoginController';
import { healthFacilityData, uploadHealthFacilities } from '../controller/HealthFacilityController';
import { createIllness, userIllnessData, deleteIllness, getAPIIllness } from '../controller/IllnessController';
import { createInjury, userInjuryData, deleteInjury } from '../controller/InjuryController';
import { saveCurrentMedication, removeCurrentMedication } from '../controller/CurrentMedicationController';
import { getAllRegions, uploadRegionData } from '../controller/RegionController';
import { createAllergy, removeAllergy } from '../controller/UserAllergyController';
import { createVaccination, removeVaccination } from '../controller/VaccinationController';
import { getUser } from '../controller/UserController';
import { updateProfilePicture } from '../controller/UserProfileController';
const fs = require("fs");


const router = Router();
router.use(bodyParser.json());

// Home page of the application
router.get("/", (req, res) => {
    console.log('here');
    
});


/**user auth api routes */
router.route('/register').post(registerUser);
router.route('/login').post(login);
router.route('/registerBeta').post(registerBeta);
router.route('/getUser').get(getUser);

/** user profile */
router.route('/uploadProfilePicture').post(updateProfilePicture);

/** */
router.route('/healthFacilityData').get(healthFacilityData);
router.route('/uploadHealthFacilitesData').get(uploadHealthFacilities);

router.route('/getAllRegions').get(getAllRegions);
router.route('/uploadRegionData').get(uploadRegionData);

router.route('/saveCurrentMedication').post(saveCurrentMedication);
router.route('/removeCurrentMedication:id').delete(removeCurrentMedication);

router.route('/createAllergy').post(createAllergy);
router.route('/removeAllergy:id').post(removeAllergy);

router.route('/createVaccination').post(createVaccination);
router.route('/deleteIllness:userId').delete(deleteIllness);

/**Illness api routes */
router.route('/createIllness').post(createIllness);
router.route('/userIllnessData:userId').get(userIllnessData);
router.route('/removeVaccination:id').delete(removeVaccination);
router.route('/getAPIIllness').get(getAPIIllness);

/**Injury api routes */
router.route('/createInjury').post(createInjury);
router.route('/userInjuryData:userId').get(userInjuryData);
router.route('/deleteInjury:userId').delete(deleteInjury);



export default router;