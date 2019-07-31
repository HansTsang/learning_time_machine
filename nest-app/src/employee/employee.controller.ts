import { Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from 'src/entities/employee.entity';
import { Repository } from 'typeorm';

@Controller('employee')
export class EmployeeController {
    constructor(
        @InjectRepository(EmployeeEntity) private readonly employeeRespository: Repository<EmployeeEntity>,
    ) { }

}
