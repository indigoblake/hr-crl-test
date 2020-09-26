import { Injectable, HttpService, NotFoundException } from '@nestjs/common'
import { User } from './user.model'

@Injectable()
export class UserService {
  constructor(private httpService: HttpService) {}
  async getThirdPartyUsers(): Promise<any> {
    let response = await this.httpService.get('https://jsonplaceholder.typicode.com/users').toPromise();
    return response.data;
  }
}