"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SEVERITYSCORE;
(function (SEVERITYSCORE) {
    SEVERITYSCORE[SEVERITYSCORE["Minor"] = 0] = "Minor";
    SEVERITYSCORE[SEVERITYSCORE["Severe"] = 1] = "Severe";
    SEVERITYSCORE[SEVERITYSCORE["Major"] = 2] = "Major";
    SEVERITYSCORE[SEVERITYSCORE["Critical"] = 3] = "Critical";
})(SEVERITYSCORE || (SEVERITYSCORE = {}));
;
class Illness {
    constructor(_id, name, description, severityScore, symptoms) {
        this._id = _id,
            this.name = name;
        this.description = description;
        this.severityScore = severityScore;
        this.symptoms = symptoms;
    }
}
exports.default = Illness;
//# sourceMappingURL=Illness.js.map