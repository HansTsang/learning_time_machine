import { Entity, Column, PrimaryGeneratedColumn, JoinTable, OneToMany } from 'typeorm';
import { EmployeeEntity } from './employee.entity';

@Entity()
export class CompanyEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => EmployeeEntity, employee => employee.company)
    employees: EmployeeEntity[];
}
