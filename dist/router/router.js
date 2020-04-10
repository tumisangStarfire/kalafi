"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/* const index = require('../public/html') */
const bodyParser = require("body-parser");
const RegisterController_1 = require("../controller/auth/RegisterController");
const RegisterController_2 = require("../controller/auth/RegisterController");
const LoginController_1 = require("../controller/auth/LoginController");
const AddressController_1 = require("../controller/AddressController");
const HealthFacilityController_1 = require("../controller/HealthFacilityController");
const IllnessController_1 = require("../controller/IllnessController");
const InjuryController_1 = require("../controller/InjuryController");
const CurrentMedicalConditionController_1 = require("../controller/CurrentMedicalConditionController");
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
router.route('/register').post(RegisterController_2.registerUser);
router.route('/login').post(LoginController_1.login);
router.route('/registerBeta').post(RegisterController_1.registerBeta);
router.route('/getUser:userId').get(UserController_1.getUser);
/**User adddress */
router.route('/createAddress').post(AddressController_1.createAddress);
router.route('/updateAddress').post(AddressController_1.updateAddress);
router.route('/getUserAddress:userId').get(AddressController_1.getUserAddress);
/** user profile */
router.route('/createUserProfile').post(UserProfileController_1.createUserProfile);
router.route('/updateUserProfile:id').post(UserProfileController_1.updateUserProfile);
router.route('/uploadProfilePicture').post(UserProfileController_1.updateProfilePicture);
router.route('/getUserProfile:userId').get(UserProfileController_1.getUserProfile);
/**CurrentMedicalCondition */
router.route('/saveCurrentMedicalCondition').post(CurrentMedicalConditionController_1.saveCurrentMedicalCondition);
router.route('/removeCurrentMedicalCondition:storageId').post(CurrentMedicalConditionController_1.removeCurrentMedicalCondition);
router.route('/getUserMedicalConditionData:userId').get(CurrentMedicalConditionController_1.getUserMedicalConditionData);
/** */
router.route('/healthFacilityData').get(HealthFacilityController_1.healthFacilityData);
router.route('/uploadHealthFacilitesData').get(HealthFacilityController_1.uploadHealthFacilities);
router.route('/getAllRegions').get(RegionController_1.getAllRegions);
router.route('/uploadRegionData').get(RegionController_1.uploadRegionData);
/**users medication */
router.route('/saveCurrentMedication').post(CurrentMedicationController_1.saveCurrentMedication);
router.route('/deleteCurrentMedication:id').delete(CurrentMedicationController_1.removeCurrentMedication);
router.route('/getUserMedicationData:userId').get(CurrentMedicationController_1.getUserMedicationData);
router.route('/createAllergy').post(UserAllergyController_1.createAllergy);
router.route('/deleteAllergy:id').post(UserAllergyController_1.removeAllergy);
/*vaccination api routes*/
router.route('/createUserVaccination').post(VaccinationController_1.createUserVaccination);
router.route('/deleteUserVaccination:storageId').delete(VaccinationController_1.removeUserVaccination);
router.route('/getAllVaccines').get(VaccinationController_1.getAllVaccines);
router.route('/getUserVaccines:userId').get(VaccinationController_1.getUserVaccines);
/**Illness api routes */
router.route('/createIllness').post(IllnessController_1.createIllness);
router.route('/userIllnessData:userId').get(IllnessController_1.userIllnessData);
router.route('/deleteIllness:userId').delete(IllnessController_1.deleteIllness);
router.route('/getAPIIllness').get(IllnessController_1.getAPIIllness);
/**Injury api routes */
router.route('/createInjury').post(InjuryController_1.createInjury);
router.route('/userInjuryData:userId').get(InjuryController_1.userInjuryData);
router.route('/deleteInjury:userId').delete(InjuryController_1.deleteInjury);
router.route('/getAllInjuryData').get(InjuryController_1.getAllInjuries);
exports.default = router;
//# sourceMappingURL=router.js.map