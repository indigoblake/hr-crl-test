import { Injectable, HttpService, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employees } from './employee.entity';
import { EmployeeModel } from './employee.model';

@Injectable()
export class EmployeeService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(Employees)
    private employeesRepository: Repository<Employees>,
  ) {}
  employees: EmployeeModel[] = [];

  findAll(): Promise<Employees[]> {
    return this.employeesRepository.find();
  }

  async getThirdPartyEmployees(): Promise<any> {
    let response = await this.httpService.get('https://jsonplaceholder.typicode.com/users').toPromise();
    return response.data;
  }
}