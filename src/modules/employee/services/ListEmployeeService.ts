import { getCustomRepository } from "typeorm";
import EmployeeRepository from "../typeorm/repositories/EmployeeRepository";
import Employee from '../typeorm/entities/Employee';

export default class ListEmployeeService {

    public async execute(): Promise<Employee[]>{
        const employeesRepository = getCustomRepository(EmployeeRepository);
        const employee = await employeesRepository.find();
        return employee;
    }

}