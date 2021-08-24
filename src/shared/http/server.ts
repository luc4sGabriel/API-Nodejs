 import 'reflect-metadata';
 import express, { Request, Response, NextFunction } from 'express';
 import 'express-async-errors';
 import cors from 'cors';
 import { errors } from 'celebrate';
 import routes from '../http/routes';
 import '@shared/typeorm';
 import AppError from '../errors/AppError';
 import 'dotenv/config';
 import { appendFile } from 'fs';
import { celebrate } from 'celebrate';


 const server = express();

 server.use(cors());

 server.use(express.json());

 server.use(routes);

server.use(errors());

 server.use((error: Error, request: Request, response: Response, next: NextFunction) =>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            message: error.message,
            status: 'error'
        })
    } 

    return response.status(500).json({
        status: 'error',
        message: error.message
    })
 });

 server.listen(3333, () => {
     console.log('Server On , Port 3333')
 });