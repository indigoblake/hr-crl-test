import { Controller, Get, Header, Post, Body } from "@nestjs/common";
import { Employees } from "./employee.entity";
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

  @Get('merged')
  @Header('Access-Control-Allow-Origin', '*')
  getMergedEmployees() {
    return this.employeeService.getMergedEmployees()
  }

  @Post()
  @Header('Access-Control-Allow-Origin', '*')
  createNewEmployee(
    @Body('name') employeeName: string,
    @Body('email') employeeEmail: string,
    @Body('company') employeeCompany: string
  ): Promise<Employees> {
    return this.employeeService.createNewEmployee(employeeName, employeeEmail, employeeCompany);
  }
}