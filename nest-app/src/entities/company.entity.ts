import { Entity, Column, PrimaryGeneratedColumn, JoinTable, OneToMany } from 'typeorm';
import { EmployeeEntity } from './employee.entity';

@Entity({ schema: 'public', name: 'company' })
export class CompanyEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => EmployeeEntity, employee => employee.company)
    employees: EmployeeEntity[];
}
