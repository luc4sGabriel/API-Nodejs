import { getCustomRepository } from "typeorm";
import CompanyRepository from "../typeorm/repositories/CompanyRepository";
import Company from '../typeorm/entities/Company';
import { ICompany } from '../interfaces/company';
import AppError from "@shared/errors/AppError";

export default class CreateCompanyService {

    public async execute({name, cnpj}: ICompany): Promise<Company>{ 
        const companyRepository = getCustomRepository(CompanyRepository); 

        const companyExists = await companyRepository.findByCnpj(cnpj);

        if(companyExists){
            throw new AppError('Empresa ja cadastrada', 400);
        }

        const company = companyRepository.create({
            name,
            cnpj
        });

        await companyRepository.save(company);

        return company;

    }

}