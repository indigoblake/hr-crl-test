import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeService } from './employee.service'
import { EmployeeController } from './employee.controller';
import { Employees } from './employee.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employees]),
    HttpModule
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})

export class EmployeeModule { }