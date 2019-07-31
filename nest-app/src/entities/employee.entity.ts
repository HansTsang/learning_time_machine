import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable, OneToMany } from 'typeorm';
import { CompanyEntity } from './company.entity';

@Entity()
export class EmployeeEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    age: string;
    @Column()
    address: string;
    @ManyToOne(type => CompanyEntity, company => company.employees)
    @JoinTable()
    company: CompanyEntity;
}
