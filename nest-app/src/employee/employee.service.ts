import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EmployeeEntity } from 'src/entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(EmployeeEntity) private readonly employeeRepository: Repository<EmployeeEntity>,
    ) { }

    async findOneByEmail(): Promise<any> {
        return 'employee';
    }

}
