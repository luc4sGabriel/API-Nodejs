import { Request,Response } from 'express';
import ListUserService from '../services/ListUserService';
import CreateUserService from '../services/CreateUserService';
import AuthUserService from '../services/AuthUserService';
import UpdateUserService from '../services/UpdateUserService';
import ShowUserService from '../services/ShowUserService';
import DeleteUserService from '../services/DeleteUserService';

export default class UsersController{

    public async index(request: Request, response:Response):Promise<Response>{
        
        const service = new ListUserService();
        const users = await service.execute();
        
        return response.json(users);
    }

    public async show(request: Request, response:Response):Promise<Response>{
        const { id } = request.params;
        const service = new ShowUserService();
        const user = await service.execute({ id });
        
        return response.json(user);
    }

    public async create(request: Request, response:Response):Promise<Response>{
        
        const{ name, email, password } = request.body;

        const service = new CreateUserService();
        const user = await service.execute({ name, email, password }); 
        
        return response.json(user);
    }    

    public async login(request: Request, response:Response):Promise<Response>{

        const { email, password } = request.body;

        const service = new AuthUserService();
        const user = await service.execute({email, password}); 
        
        return response.json(user);
    }

    public async update(request: Request, response:Response):Promise<Response>{
        
        const { name, email, password } = request.body;
        const { id } = request.params;
        
        const service = new UpdateUserService();
        const user = await service.execute({ id, name, email, password }); 
        
        return response.json(user);
    }

    public async delete(request: Request, response: Response): Promise<Response>{
        const { id } = request.body;

        const service = new  DeleteUserService(); 
        const company = await service.execute({ id });

        return response.json(company);
        
    }
}