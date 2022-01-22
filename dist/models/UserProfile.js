"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 0] = "Female";
    Gender[Gender["other"] = 2] = "other";
})(Gender || (Gender = {}));
/**class for the users profile information */
class UserProfile {
    /** User Profile Document Structure
     *  _id = ObjectId(121221qwqwqw)
     * date_of_birth : 1990-05-12, [required]
     * gender : 1
     * omang : xxxxxxxxx
     * profile_picture: link to s3
     * weight : 75 [required],
     * height :  176,
     *
     *
     */
    constructor(dob, weight, height, gender, omang, profilePicture, bmi, bloodType, storageId, waistSize) {
        this.dob = dob;
        this.gender = gender;
        this.omang = omang;
        this.profilePicture = profilePicture;
        this.weight = weight;
        this.height = height;
        this.bmi = bmi;
        this.bloodType = bloodType;
        this.waistSize = waistSize;
    }
    set setDateofBirth(dob) {
        this.dob = dob;
    }
    get getDateofBirth() {
        return this.dob;
    }
    set setGender(gender) {
        this.gender = gender;
    }
    get getGender() {
        return this.gender;
    }
    set setOmang(omang) {
        this.omang = omang;
    }
    get getOmang() {
        return this.omang;
    }
    set setProfilePicture(profilePicture) {
        this.profilePicture = profilePicture;
    }
    get getProfilePicture() {
        return this.profilePicture;
    }
    set setWeight(weight) {
        this.weight = weight;
    }
    get getWeight() {
        return this.weight;
    }
    set setHeight(height) {
        this.height = height;
    }
    get getHeight() {
        return this.height;
    }
    set setBMI(bmi) {
        this.bmi = bmi;
    }
    get getBMI() {
        return this.bmi;
    }
    set SetBloodType(bloodType) {
        this.bloodType = bloodType;
    }
    get getBloodType() {
        return this.bloodType;
    }
    set setWaistSize(waistSize) {
        this.waistSize = waistSize;
    }
    get setWaistSize() {
        return this.waistSize;
    }
    /**calculate the age of the user */
    calculateAge(date_of_birth) {
        var todaysDate = new Date();
        const birthDate = new Date(date_of_birth);
        let age = todaysDate.getFullYear() - birthDate.getFullYear();
        var month = todaysDate.getMonth() - birthDate.getMonth();
        return age;
    }
    /**calculate the Body mass index */
    calculateBMI(weight, height) {
        return this.bmi = weight / (height * height);
    }
    /**produce the health risk associated with the bmi number */
    getHealthRisk(bmi) {
        if (bmi < 15) {
            console.log("You are in 'Very severely underweight' Category");
            return 'Severely Underweight';
        }
        else if (bmi >= 15 && bmi < 16) {
            console.log("You are in 'Severely underweight' Category");
            return 'Slightly Underweight';
        }
        else if (bmi >= 16 && bmi < 18.5) {
            console.log("You are in 'Underweight' Category");
            return 'Underweight';
        }
        else if (bmi >= 18.5 && bmi < 25) {
            console.log("You are in 'Normal (healthy weight)' Category");
            return 'Normal Weight';
        }
        else if (bmi >= 25 && bmi < 30) {
            console.log("You are in 'Overweight' Category");
            return 'Overweight';
        }
        else if (bmi >= 30 && bmi < 35) {
            console.log("You are in 'Moderately obese' Category");
            return 'Moderately Obese';
        }
        else if (bmi >= 35 && bmi < 40) {
            console.log("You are in 'Severely obese' Category");
            return 'Severely Obese';
        }
        else if (bmi > 40) {
            console.log("You are in 'Very severely obese' Category");
            return 'Extremely Obese';
        }
    }
}
exports.default = UserProfile;
//# sourceMappingURL=UserProfile.js.map