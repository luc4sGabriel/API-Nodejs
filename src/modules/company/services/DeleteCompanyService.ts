import AppError from '@shared/errors/AppError';
import { getCustomRepository,getConnection } from 'typeorm';
import CompanyRepository from '../typeorm/repositories/CompanyRepository';
import Company from '../typeorm/entities/Company';
import { ICompanyDelete } from '../interfaces/company';

export default class DeleteCompanyService{

    public async execute({ id }: ICompanyDelete): Promise<Company>{
        const companyRepository = getCustomRepository(CompanyRepository);
        const company = await companyRepository.findOne(id);

        if (!company){
            throw new AppError("Empresa nao encontrada", 400);
        }

        await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Company)
        .where("id = :id", { id })
        .execute()

        return company;
    }
}
