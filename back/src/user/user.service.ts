import { Injectable, HttpService, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}
  users: User[] = [];

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  async getThirdPartyUsers(): Promise<any> {
    let response = await this.httpService.get('https://jsonplaceholder.typicode.com/users').toPromise();
    return response.data;
  }
}