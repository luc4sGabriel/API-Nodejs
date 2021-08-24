import { getCustomRepository, getConnection, getRepository} from 'typeorm';
import UserRepository from '../typeorm/repositories/UserRepository';
import { IUserLogin } from '../interfaces/userLogin'
import AppError from '@shared/errors/AppError';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from 'src/config/auth';

export default class AuthUserService{

    public async execute({ email, password }: IUserLogin){

        const userRepository = getCustomRepository(UserRepository);
        
        //const userEmailExists = await userRepository.findOne({where : email = email});

        const user = await userRepository.findByEmail(email);

        if(!user){
            throw new AppError('Falha na autenticacao 1',400); 
        };
        
        // const user2 = await getConnection()
        // .createQueryBuilder()
        // .select("users")
        // .from(User, "users")
        // .where("users.password = :password", { password })
        // .getOne();
        
        if(!await compare(password , user.password)) {
            throw new AppError('Falha na autenticacao 2',400)
        }

        const token = sign({ id:user.id, name: user.name}, authConfig.jwt.secret ,{
            subject: String(user.id),
            expiresIn: authConfig.jwt.expiresIn
        });       

        delete user.password;
        user.token = token;

        return { user };
    }
}