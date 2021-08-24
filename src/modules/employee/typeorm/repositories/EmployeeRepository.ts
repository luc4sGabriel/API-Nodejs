import { IEmployee } from '@modules/employee/interfaces/employee';
import { Repository, EntityRepository } from 'typeorm';
import Employee from '../entities/Employee';


interface ICompanyEmployee{
    company_id: string;
    cnpj: string;
}

interface IRequest{
    employee: Employee;
    companies: ICompanyEmployee[];
}

@EntityRepository(Employee)
export default class EmployeeRepository extends Repository<Employee>{


    public async findByName(name: string): Promise<Employee | undefined> {
        const employee = await this.findOne({
            where: { name }
        });
        return employee; 
    }

    public async findByMatricula(matricula: string): Promise<Employee | undefined> {
        const employee = await this.findOne({
            where: { matricula }
        });
        
        return employee;
    }

    public async findById(id: string): Promise<Employee | undefined>{
        const employee = await this.findOne( 
            id,
            {
                relations: ['employee_company']
            }
        );
        return employee;
    }

    public async createEmployee({ employee,companies }: IRequest): Promise<Employee> {
        const emp = this.create({
            employee,
            companies 
        });

        await this.save(employee);

        return employee;
    }
    
}