"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/* const index = require('../public/html') */
const bodyParser = require("body-parser");
const RegisterController_1 = require("../controller/auth/RegisterController");
const RegisterController_2 = require("../controller/auth/RegisterController");
const LoginController_1 = require("../controller/auth/LoginController");
const UserController_1 = require("../controller/UserController");
const CurrentMedicationController_1 = require("../controller/CurrentMedicationController");
const HealthFacilityController_1 = require("../controller/HealthFacilityController");
const RegionController_1 = require("../controller/RegionController");
const PatientRecordController_1 = require("../controller/PatientRecordController");
const fs = require("fs");
const router = express_1.Router();
router.use(bodyParser.json());
// Home page of the application
router.get("/", (req, res) => {
    console.log('here');
});
/**user auth api routes */
router.route('/register').post(RegisterController_2.register);
router.route('/login').post(LoginController_1.login);
router.route('/registerBeta').post(RegisterController_1.registerBeta);
router.route('/find-user/:userId').get(UserController_1.findUser);
/**CurrentMedicalCondition */
router.route('/store-medication').post(CurrentMedicationController_1.storeCurrentMedication);
router.route('/destroy-medication/:storageId').delete(CurrentMedicationController_1.destroyMedication);
router.route('/find-user-medication/:userId').get(CurrentMedicationController_1.findUserMedication);
/**
 * Health Facilities
*/
router.route('/all-health-facilities').get(HealthFacilityController_1.findAllHealthFacilities);
router.route('/all-regions').get(RegionController_1.findAllRegions);
/**Illness api routes */
router.route('/find-user-illness/:userId').get(PatientRecordController_1.findUserIllnesses);
/**Injury api routes */
router.route('/find-user-injuries/:userId').get(PatientRecordController_1.findUserInjuries);
exports.default = router;
//# sourceMappingURL=router.js.map