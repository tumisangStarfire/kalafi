import { Request, Response } from 'express';


export const  notFound = (request: Request, response: Response, next) => {
    const error = new Error (`Not Found - ${ request.originalUrl }`);
    response.status(404);
    next(); 
} 

export const errorHandler = (err,request: Request, response: Response, next) => {
   const statusCode = response.statusCode === 200 ? 500 : response.statusCode; 
    response.status(statusCode);
    response.json({
        err: err.message,
    })
    next(); 
}