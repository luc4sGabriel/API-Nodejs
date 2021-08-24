import { getCustomRepository, getRepository } from "typeorm";
import CompanyRepository from "../typeorm/repositories/CompanyRepository";
import Company from '../typeorm/entities/Company';

export default class ListCompanyService {
    
    public async execute(): Promise<Company[]>{
        const companiesRepository = getCustomRepository(CompanyRepository);
        const companies = await companiesRepository.find();
        return companies;
    }

}