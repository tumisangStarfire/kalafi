import { Router } from "express";
/* const index = require('../public/html') */
import * as bodyParser from 'body-parser';
import { registerBeta } from '../controller/auth/RegisterController';
import { register } from '../controller/auth/RegisterController';
import { login } from '../controller/auth/LoginController'; 
import { findUser } from '../controller/UserController';
import { storeCurrentMedication,findUserMedication,destroyMedication } from '../controller/CurrentMedicationController';
import { findAllHealthFacilities } from '../controller/HealthFacilityController';
import { findAllRegions } from '../controller/RegionController';
import { findUserInjuries,findUserIllnesses } from '../controller/PatientRecordController';

const fs = require("fs");

const router = Router();
router.use(bodyParser.json());
// Home page of the application
router.get("/", (req, res) => {
    console.log('here');

});


/**user auth api routes */
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/registerBeta').post(registerBeta);
router.route('/find-user/:userId').get(findUser);



/**CurrentMedicalCondition */
router.route('/store-medication').post(storeCurrentMedication);
router.route('/destroy-medication/:storageId').delete(destroyMedication);
router.route('/find-user-medication/:userId').get(findUserMedication);

/** 
 * Health Facilities
*/
router.route('/all-health-facilities').get(findAllHealthFacilities);

router.route('/all-regions').get(findAllRegions);


/**Illness api routes */
router.route('/find-user-illness/:userId').get(findUserIllnesses);


/**Injury api routes */
router.route('/find-user-injuries/:userId').get(findUserInjuries);

export default router;