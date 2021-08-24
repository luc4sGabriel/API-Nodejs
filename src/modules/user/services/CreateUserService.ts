import { getCustomRepository } from 'typeorm';
import UserRepository from '../typeorm/repositories/UserRepository';
import User from '../typeorm/entities/User';
import { IUser } from '../interfaces/user';
import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';

export default class CreateUserService {

    public async execute({ name,email,password }: IUser): Promise<User>{
        const userRepository = getCustomRepository(UserRepository);
        
        const userExists = await userRepository.findByEmail(email);
        //const userEmailExists = await userRepository.findOne({where : email});

        if(userExists){
            throw new AppError('Usuario com Email Ja cadastrado',400); 
        }

        const passwordHash = await hash(password, 8);

        const user = userRepository.create({
            name,
            email,
            password: passwordHash
        });

        await userRepository.save(user);

        return user;
    }

}