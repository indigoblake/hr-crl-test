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

  async getMergedEmployees(): Promise<any> {
    const employeesTpList = [
      {id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', company: 'Romaguera'},
      {id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', company: 'Deckow'},
      {id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net', company: 'Romaguera'},
      {id: 4, name: 'Patricia Lebsack', email: 'Julianne.OConner@kory.org', company: 'Rebel'},
      {id: 5, name: 'Chelsey Dietrich', email: 'Lucio_Hettinger@annie.ca', company: 'Rebel'},
      {id: 6, name: 'Mrs. Dennis Schulist', email: 'Karley_Dach@jasper.info', company: 'Rebel'},
      {id: 7, name: 'Kurtis Weissnat', email: 'Telly.Hoeger@billy.biz', company: 'Rebel'},
      {id: 8, name: 'Nicholas Runolfsdottir', email: 'Sherwood@rosamond.me', company: 'Abernathy Group'},
      {id: 9, name: 'Glenna Reichert', email: 'Chaim_McDermott@dana.io', company: 'Yost and Sons'},
      {id: 10, name: 'Clementina DuBuque', email: 'clem@test.io', company: 'Hoeger LLC'},
      {id: 11, name: 'Anna Smith', email: 'annasmith@rebel.io', company: 'Rebel'}
    ];
    const employeesHrList = this.employeesRepository.find();

    const merged = this.mergeDataFromDifferentSources(employeesTpList, await employeesHrList);

    return merged;
  }

  mergeDataFromDifferentSources(
      employeesTpList: {id: number, name: string, email: string, company: string}[],
      employeesHrList: {id: number, name: string, email: string, company: string}[],
    ): any {
    let mergedData: {id: number, name: string, email: string, company: string, isSynced: boolean}[] = [];

    employeesTpList.forEach(employee => {
      let isSynced: boolean = employeesHrList.find(hrEmployee => employee.name === hrEmployee.name) ? true : false;
      mergedData.push({
        ...employee,
        isSynced: isSynced
      });
    });

    return mergedData;
  }
}