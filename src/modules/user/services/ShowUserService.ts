import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../typeorm/repositories/UserRepository';
import User from '../typeorm/entities/User';


interface IRequest{

    id: string;

}

export default class ShowUserService {

    public async execute({ id }: IRequest): Promise<User>{
        const usersRepository = getCustomRepository(UserRepository);
        const users = await usersRepository.findOne(id);

        if (!users){
            throw new AppError("Ocorreu uma falha", 400); 
        }

        return users;
    }

}