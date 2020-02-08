import { MedicalFileType } from "./MedicalFileType";


export class MedicalFile implements MedicalFileType {
    id?: number;
    medical_file_type_id: number; /**the id of te medical file type */

    userId: number; /** users id*/

    private date_uploaded?: string;

    /**storage path in s3 */
    //s3 bucket -> Medical Files-> userId-> File Types (X-Rays)->file name  
    private filePath?: string;

    /**Filename given by the User i.e left leg scan */
    private fileName: string;


    /** BASE 64 encdoded file */
    private base64Stringfile: string;

    /**constructo */
    constructor(userId: number, medical_file_type_id: number, fileName: string, base64Stringfile: string, date_uploaded?: string, filePath?: string) {
        this.userId = userId;
        this.medical_file_type_id = medical_file_type_id;
        this.fileName = fileName;
        this.base64Stringfile = base64Stringfile;
        this.date_uploaded = date_uploaded;
        this.filePath = filePath;

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

    public get getMedical_file_type_id(): number {
        return this.medical_file_type_id;
    }
    public set setMedical_file_type_id(value: number) {
        this.medical_file_type_id = value;
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