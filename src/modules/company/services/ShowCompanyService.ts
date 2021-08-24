import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import CompanyRepository from "../typeorm/repositories/CompanyRepository";
import Company from '../typeorm/entities/Company';

interface IRequest{
    id: string;
}

export default class ShowCompanyService{

    public async execute({ id }: IRequest): Promise<Company>{
        const companyRepository = getCustomRepository(CompanyRepository);
        const company = await companyRepository.findOne(id);

        if (!company){
            throw new AppError("Ocorreu uma falha", 400); 
        }

        return company;
    }

}