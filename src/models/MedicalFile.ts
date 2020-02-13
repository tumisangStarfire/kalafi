import { MedicalFileType } from "./MedicalFileType";
import { ObjectId } from "mongodb";


export class MedicalFile {

    _id: ObjectId;

    userId: string; /** users id*/
    private date_uploaded?: string;
    /**storage path in s3 */
    //s3 bucket -> Medical Files-> userId-> File Types (X-Rays)->file name  
    private filePath?: string;

    /**Filename given by the User i.e left leg scan */
    private fileName: string;


    /** BASE 64 encdoded file */
    private base64Stringfile: string;

    private medicalFileType: MedicalFileType;

    /**Medical File Document Structure 1:N 
     *  _id : ObjectId(121221qwqwqw),
     * userID :   ObjectId(23232wewew)
     * fileName : Head Injury scan 
     * filePath : s3 file Path 
     * date_uploaded :2020-02-13 
     * medicalFileType{ 
     *       "id": 3,
             "name": "CAT-Scan"
     * }
     * 
     */
    constructor(userId: string, medicalFileType: MedicalFileType, fileName: string, base64Stringfile: string, date_uploaded?: string, filePath?: string) {

        this.userId = userId;
        this.fileName = fileName;
        this.base64Stringfile = base64Stringfile;
        this.date_uploaded = date_uploaded;
        this.filePath = filePath;
        this.medicalFileType = medicalFileType;
    }

    /**accessors */
    public get getFileName(): string {
        return this.fileName;
    }
    public set setFileName(value: string) {
        this.fileName = value;
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