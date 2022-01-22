import { ObjectId,Timestamp } from "mongodb";

export default class MedicalFileType {
   
    _id : ObjectId;
    name: string; /** Test report, x-ray, sonography,ct-scan */
    created_at : Timestamp;
    updated_at : Timestamp;

    constructor(_id : ObjectId, name: string) {
        this._id = _id, 
        this.name = name;
       
    }

}

