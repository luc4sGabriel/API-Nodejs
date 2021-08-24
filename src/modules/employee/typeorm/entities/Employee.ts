import { Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,ManyToOne, JoinColumn } from 'typeorm';
import Company from '@modules/company/typeorm/entities/Company';

@Entity('employees')
export default class Employee {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Company, company => company.employee_company)
    @JoinColumn({ name: 'company_id' }) 
    company: Company;
    
    @Column()
    name:string;

    @Column()
    matricula:string;

    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}