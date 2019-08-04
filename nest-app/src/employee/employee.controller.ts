import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from 'src/entities/employee.entity';
import { Repository } from 'typeorm';

@Controller('employee')
export class EmployeeController {
    constructor(
        @InjectRepository(EmployeeEntity) private readonly employeeRespository: Repository<EmployeeEntity>,
    ) { }
    async created(): Promise<any> {
        const e = new EmployeeEntity();
        e.name = 'tom';
        e.age = '20';
        e.address = 'dl';
        await this.employeeRespository.save(e);
    }
    @Get('/all')
    public async findEmployee() {
        return await this.employeeRespository.find();
    }

}
