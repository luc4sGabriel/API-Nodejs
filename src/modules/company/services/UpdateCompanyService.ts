import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import CompanyRepository from '../typeorm/repositories/CompanyRepository';
import Company from '../typeorm/entities/Company';
import { ICompanyUpdate } from '../interfaces/company';

export default class UpdateCompanyService{

    
    public async execute({ id,name,cnpj }: ICompanyUpdate): Promise<Company>{
        const companyRepository = getCustomRepository(CompanyRepository);
        const company = await companyRepository.findOne(id);

        if (!company){
            throw new AppError("Usuario nao cadastrado", 400);
        }

        const companyExists = await companyRepository.findByCnpj(cnpj);

        if(companyExists?.id && company.id != companyExists?.id ){
            throw new AppError('Cnpj da Empresa ja cadastrado', 400);
        }

        company.name = name;
        company.cnpj = cnpj; 

        await companyRepository.save(company)

        return company;
    }

}