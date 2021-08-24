import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../typeorm/repositories/UserRepository';
import User from '../typeorm/entities/User';
import { IUserUpdate } from '../interfaces/user';

export default class UpdateUserService {

    public async execute({ id,name,email,password }: IUserUpdate): Promise<User>{
        const usersRepository = getCustomRepository(UserRepository);
        const users = await usersRepository.findOne(id);

        if (!users){
            throw new AppError("Usuario nao cadastrado", 400);
        }

        const userExists = await usersRepository.findByName(name);

        if(userExists?.id && users.id != userExists?.id ){
            throw new AppError('Nome do usuario ja cadastrado', 400);
        }

        users.name = name;
        users.email = email; 
        users.password = password;

        await usersRepository.save(users)

        return users;
    }

}