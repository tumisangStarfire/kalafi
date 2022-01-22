import { ObjectId, Timestamp } from "mongodb";

export default  class Region {
  
  _id: ObjectId;
  name: string;  
  created_at : Timestamp;
  updated_at : Timestamp;

  constructor(_id:ObjectId, name ? : string){ 
   
    this._id=_id;
    this.name = name;
  } 

  get getId() : ObjectId { 
    return this._id; 
 } 

  set getId(_id: ObjectId) {
    this._id = _id;
  }  

  get getRegionId() : ObjectId { 
    return this._id; 
  }  

  get getName():string{ 
    return this.name;
  }  

  set setName(name : string){ 
    this.name =name;
  }


}
