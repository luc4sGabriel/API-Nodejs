import { Request,Response,NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from 'src/config/auth';
import AppError from '@shared/errors/AppError';

export default async function authentication(request: Request, response: Response, next: NextFunction) {

    const header = request.headers.authorization;

    if(!header){
        throw new AppError('Token nao informado',401);
    }

    const token = header.split(' ')[1];

    try{
        
        const decodedToken = verify(token, authConfig.jwt.secret);
        console.log(decodedToken);
        return next();

    } catch (error){

        throw new AppError('Token Invalido',401);

    }

    
}