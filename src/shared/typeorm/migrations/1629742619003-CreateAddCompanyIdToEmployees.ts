import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class CreateAddCompanyIdToEmployees1629742619003 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'employees',
            new TableColumn({
                name: 'company_id',
                type: 'uuid',
                isNullable: true
            })
        );

        await queryRunner.createForeignKey( 
            'employees',
            new TableForeignKey({
                name: 'EmployeesCompany',
                columnNames: ['company_id'],
                referencedTableName: 'companies',
                referencedColumnNames: ['id'],
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            })
        );
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('employees', 'EmployeesCompany');
        await queryRunner.dropColumn('employees', 'company_id');
    }

}
