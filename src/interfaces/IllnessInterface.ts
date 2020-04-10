export interface IllnessInterface{ 
    id:number; 
    name:string; 
    dataUpdatedAt?: string; 
    facts?: Array<String>; 
    symptoms? : null; 
    transmission?:null; 
    diagnosis?:null;
    treatment?:null; 
    prevention?:null;
    more?:null; 
    isActive?:boolean;
}