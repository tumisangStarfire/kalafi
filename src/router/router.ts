import { Router } from "express";
/* const index = require('../public/html') */
import * as bodyParser from 'body-parser';

import { registerUser } from '../controller/auth/RegisterController';
import { login } from '../controller/auth/LoginController';
import { healthFacilityData } from '../controller/HealthFacilityController';
import { createIllness, userIllnessData, deleteIllness } from '../controller/IllnessController';
import { createInjury, userInjuryData, deleteInjury } from '../controller/InjuryController';
import { saveCurrentMedication, removeCurrentMedication } from '../controller/CurrentMedicationController';
import { getAllRegions } from '../controller/RegionController';
import { createAllergy, removeAllergy } from '../controller/UserAllergyController';
import { createVaccination, removeVaccination } from '../controller/VaccinationController';

import { updateProfilePicture } from '../controller/UserProfileController';


const router = Router();
router.use(bodyParser.json());

/* // Home page of the application
router.get("/", (req, res) => {
    res.render("mooki");
}); */


/**user auth api routes */
router.route('/register').post(registerUser);
router.route('/login').post(login);

/** user profile */
router.route('/uploadProfilePicture').post(updateProfilePicture);

/** */
router.route('/healthFacilityData').get(healthFacilityData);
router.route('/getAllRegions').get(getAllRegions);

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

/**Injury api routes */
router.route('/createInjury').post(createInjury);
router.route('/userInjuryData:userId').get(userInjuryData);
router.route('/deleteInjury:userId').delete(deleteInjury);

export default router;