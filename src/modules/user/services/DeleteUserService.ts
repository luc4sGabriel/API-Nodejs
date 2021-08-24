import AppError from '@shared/errors/AppError';
import { getCustomRepository,getConnection } from 'typeorm';
import UserRepository from '../typeorm/repositories/UserRepository';
import User from '../typeorm/entities/User';
import { IUserDelete, IUserUpdate } from '../interfaces/user';

export default class DeleteUserService {

    public async execute({ id }: IUserDelete): Promise<User>{
        const usersRepository = getCustomRepository(UserRepository);
        const users = await usersRepository.findOne(id);

        if (!users){
            throw new AppError("Usuario nao encontrado", 400);
        }

        await getConnection()
        .createQueryBuilder()
        .delete()
        .from(User)
        .where("id = :id", { id })
        .execute()

        return users;
    }

}