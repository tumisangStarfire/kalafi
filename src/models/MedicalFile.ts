import { ObjectId } from "mongodb"; 
import MedicalFileType from "./MedicalFileType";



export default class MedicalFile {

    _id: ObjectId;

    userId: ObjectId; /** users id*/
    private date_uploaded?: string;
    /**storage path in s3 */
    //s3 bucket -> Medical Files-> userId-> File Types (X-Rays)->file name  
    private filePath?: string;

    /**Filename given by the User i.e left leg scan */
    private name: string;


    /** BASE 64 encdoded file */
    private base64Stringfile: string;

    private medicalFileType: MedicalFileType;

  
    constructor(_id : ObjectId,userId: ObjectId, medicalFileType: MedicalFileType, name: string, base64Stringfile: string, date_uploaded?: string, filePath?: string) {
       this._id =  _id
        this.userId = userId;
        this.name = name;
        this.base64Stringfile = base64Stringfile;
        this.date_uploaded = date_uploaded;
        this.filePath = filePath;
        this.medicalFileType = medicalFileType;
    } 

    get getId() : ObjectId { 
        return this._id; 
     } 
    
     set getId(_id: ObjectId) {
       this._id = _id;
     } 

    /**accessors */
    public get getFileName(): string {
        return this.name;
    }
    public set setFileName(name: string) {
        this.name = name;
    }

    public get getfilePath(): string {
        return this.filePath;
    }
    public set setFilePath(filePath: string) {
        this.filePath = filePath;
    }



    public get getDateUploaded(): string {
        return this.date_uploaded;
    }

    public set setDateUploaded(date_uploaded: string) {
        this.date_uploaded = date_uploaded;
    }

    public get getBase64File(): string {
        return this.base64Stringfile;
    }

    public set setBase54File(base64Stringfile: string) {
        this.base64Stringfile = base64Stringfile;
    }




}