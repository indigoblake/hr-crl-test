import { Controller, Get, Header } from "@nestjs/common";
import { EmployeeService } from './employee.service'

@Controller('api/employees/')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get('tp')
  @Header('Access-Control-Allow-Origin', '*')
  getThirdPartyEmployees() {
    return this.employeeService.getThirdPartyEmployees()
  }

  @Get('db')
  findAll() {
    return this.employeeService.findAll()
  }
}