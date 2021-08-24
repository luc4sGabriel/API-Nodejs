import { getCustomRepository } from "typeorm";
import EmployeeRepository from "../typeorm/repositories/EmployeeRepository";
import CompanyRepository from "@modules/company/typeorm/repositories/CompanyRepository";
import Employee from '../typeorm/entities/Employee';
import { IEmployee } from '../interfaces/employee';
import AppError from "@shared/errors/AppError";

interface ICompanyEmployee{
    company_id: string;
    name: string;
    cnpj: string;
}

interface IRequest{
    company: ICompanyEmployee[]
}

export default class CreateEmployeeService {

    public async execute({ name, matricula, avatar,company_id }: IEmployee): Promise<Employee>{ 
        const employeeRepository = getCustomRepository(EmployeeRepository); 
        const companyRepository = getCustomRepository(CompanyRepository);

        const employeeExists = await employeeRepository.findByMatricula(matricula);

        const companyExists = await companyRepository.findByIds(company_id as any);

        if(employeeExists || companyExists){
            throw new AppError('Empresa ja cadastrada', 400);
        }

        const employee = employeeRepository.create({

        });

        await companyRepository.save(company);

        return company;

    }

}