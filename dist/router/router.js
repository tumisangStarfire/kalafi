"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/* const index = require('../public/html') */
const bodyParser = require("body-parser");
const RegisterController_1 = require("../controller/auth/RegisterController");
const LoginController_1 = require("../controller/auth/LoginController");
const HealthFacilityController_1 = require("../controller/HealthFacilityController");
const IllnessController_1 = require("../controller/IllnessController");
const InjuryController_1 = require("../controller/InjuryController");
const CurrentMedicationController_1 = require("../controller/CurrentMedicationController");
const RegionController_1 = require("../controller/RegionController");
const UserAllergyController_1 = require("../controller/UserAllergyController");
const VaccinationController_1 = require("../controller/VaccinationController");
const UserController_1 = require("../controller/UserController");
const UserProfileController_1 = require("../controller/UserProfileController");
const fs = require("fs");
const router = express_1.Router();
router.use(bodyParser.json());
// Home page of the application
router.get("/", (req, res) => {
    console.log('here');
});
/**user auth api routes */
router.route('/register').post(RegisterController_1.registerUser);
router.route('/login').post(LoginController_1.login);
router.route('/getUser').get(UserController_1.getUser);
/** user profile */
router.route('/uploadProfilePicture').post(UserProfileController_1.updateProfilePicture);
/** */
router.route('/healthFacilityData').get(HealthFacilityController_1.healthFacilityData);
router.route('/uploadHealthFacilitesData').get(HealthFacilityController_1.uploadHealthFacilities);
router.route('/getAllRegions').get(RegionController_1.getAllRegions);
router.route('/uploadRegionData').get(RegionController_1.uploadRegionData);
router.route('/saveCurrentMedication').post(CurrentMedicationController_1.saveCurrentMedication);
router.route('/removeCurrentMedication:id').delete(CurrentMedicationController_1.removeCurrentMedication);
router.route('/createAllergy').post(UserAllergyController_1.createAllergy);
router.route('/removeAllergy:id').post(UserAllergyController_1.removeAllergy);
router.route('/createVaccination').post(VaccinationController_1.createVaccination);
router.route('/deleteIllness:userId').delete(IllnessController_1.deleteIllness);
/**Illness api routes */
router.route('/createIllness').post(IllnessController_1.createIllness);
router.route('/userIllnessData:userId').get(IllnessController_1.userIllnessData);
router.route('/removeVaccination:id').delete(VaccinationController_1.removeVaccination);
router.route('/getAPIIllness').get(IllnessController_1.getAPIIllness);
/**Injury api routes */
router.route('/createInjury').post(InjuryController_1.createInjury);
router.route('/userInjuryData:userId').get(InjuryController_1.userInjuryData);
router.route('/deleteInjury:userId').delete(InjuryController_1.deleteInjury);
exports.default = router;
//# sourceMappingURL=router.js.map