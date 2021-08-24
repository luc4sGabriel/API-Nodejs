import { Request, Response } from "express";
import ListCompanyService from "../services/ListCompanyService";
import CreateCompanyService from "../services/CreateCompanyService";
import DeleteCompanyService from "../services/DeleteCompanyService";
import ShowCompanyService from "../services/ShowCompanyService";
import UpdateCompanyService from "../services/UpdateCompanyService";

export default class CompanyController{

    public async index(request: Request, response:Response):Promise<Response>{
        
        const service = new ListCompanyService();
        const companies = await service.execute();

        return response.json(companies);
    }

    public async show(request: Request, response:Response):Promise<Response>{
        const { id } = request.params;
        const service = new ShowCompanyService();
        const company = await service.execute({ id });

        return response.json(company);
    }

    public async create(request: Request, response: Response): Promise<Response>{

        const {
            name,
            cnpj
        } = request.body;

        const service = new  CreateCompanyService(); 
        const company = await service.execute({name,cnpj});

        return response.json(company);
        
    }

    public async update(request: Request, response: Response): Promise<Response>{

        const {
            name,
            cnpj
        } = request.body;

        const { id } = request.params;

        const service = new  UpdateCompanyService(); 
        const company = await service.execute({ id,name,cnpj });

        return response.json(company);
        
    }

    public async delete(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;

        const service = new  DeleteCompanyService(); 
        const company = await service.execute({ id });

        return response.json(company);
        
    }

}