enum Status {
    success = 'success',
    failed = 'failed'
  }


export interface JsonResponseInterface{
    status : string,
    message: string,
    data: {},

}