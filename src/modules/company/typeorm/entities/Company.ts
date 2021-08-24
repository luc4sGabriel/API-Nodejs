import { Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, EntityColumnNotFound, OneToMany } from 'typeorm';
import Employee from '@modules/employee/typeorm/entities/Employee';

@Entity('companies')
export default class Company {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(() => Employee, employee => employee.company, {
        cascade: true
    })
    employee_company: Employee[]
    
    @Column()
    name:string;

    @Column()
    cnpj: string;

    @CreateDateColumn()
    created_at: Date; 

    @UpdateDateColumn() 
    updated_at: Date;
}