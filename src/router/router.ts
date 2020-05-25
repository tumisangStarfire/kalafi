import { Router } from "express";
/* const index = require('../public/html') */
import * as bodyParser from 'body-parser';
import { registerBeta } from '../controller/auth/RegisterController';
import { registerUser } from '../controller/auth/RegisterController';
import { login } from '../controller/auth/LoginController';
import { createAddress,updateAddress,getUserAddress } from "../controller/AddressController";
import { healthFacilityData, uploadHealthFacilities } from '../controller/HealthFacilityController';
import { createIllness, userIllnessData, deleteIllness, getAPIIllness } from '../controller/IllnessController';
import { createInjury, userInjuryData, deleteInjury,getAllInjuries } from '../controller/InjuryController';
import { saveCurrentMedicalCondition, removeCurrentMedicalCondition,getUserMedicalConditionData } from '../controller/CurrentMedicalConditionController';
import { saveCurrentMedication, removeCurrentMedication,getUserMedicationData } from '../controller/CurrentMedicationController';
import { getAllRegions, uploadRegionData } from '../controller/RegionController';
import { createAllergy, removeAllergy } from '../controller/UserAllergyController';
import { createUserVaccination, removeUserVaccination,getAllVaccines,getUserVaccines } from '../controller/VaccinationController';
import { getUser } from '../controller/UserController';
import { createUserProfile ,updateUserProfile,updateProfilePicture,getUserProfile } from '../controller/UserProfileController';
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
router.route('/getUser/:userId').get(getUser);

/**User adddress */
router.route('/createAddress').post(createAddress);
router.route('/updateAddress').post(updateAddress);
router.route('/getUserAddress/:userId').get(getUserAddress);



/** user profile */
router.route('/createUserProfile').post(createUserProfile);
router.route('/updateUserProfile/:id').post(updateUserProfile)
router.route('/uploadProfilePicture').post(updateProfilePicture);
router.route('/getUserProfile/:userId').get(getUserProfile);

/**CurrentMedicalCondition */
router.route('/saveCurrentMedicalCondition').post(saveCurrentMedicalCondition);
router.route('/removeCurrentMedicalCondition/:storageId').delete(removeCurrentMedicalCondition);
router.route('/getUserMedicalConditionData/:userId').get(getUserMedicalConditionData);

/** */
router.route('/healthFacilityData').get(healthFacilityData);
router.route('/uploadHealthFacilitesData').get(uploadHealthFacilities);

router.route('/getAllRegions').get(getAllRegions);
router.route('/uploadRegionData').get(uploadRegionData);

/**users medication */
router.route('/saveCurrentMedication').post(saveCurrentMedication);
router.route('/deleteCurrentMedication/:id').delete(removeCurrentMedication);
router.route('/getUserMedicationData/:userId').get(getUserMedicationData);


router.route('/createAllergy').post(createAllergy);
router.route('/deleteAllergy/:id').post(removeAllergy);

/*vaccination api routes*/
router.route('/createUserVaccination').post(createUserVaccination);
router.route('/deleteUserVaccination:storageId').delete(removeUserVaccination);
router.route('/getAllVaccines').get(getAllVaccines);
router.route('/getUserVaccines:userId').get(getUserVaccines);

/**Illness api routes */
router.route('/createIllness').post(createIllness);
router.route('/userIllnessData/:userId').get(userIllnessData);
router.route('/deleteIllness/:userId').delete(deleteIllness);
router.route('/getAPIIllness').get(getAPIIllness);

/**Injury api routes */
router.route('/createInjury').post(createInjury);
router.route('/userInjuryData/:userId').get(userInjuryData);
router.route('/deleteInjury/:userId').delete(deleteInjury);
router.route('/getAllInjuryData').get(getAllInjuries);


export default router;