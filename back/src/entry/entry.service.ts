import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class EntryService {
  constructor(
    private httpService: HttpService,
  ) {}

  async getThirdPartyEntries(): Promise<any> {
    let response = await this.httpService.get('https://jsonplaceholder.typicode.com/posts').toPromise();
    return response.data;
  }
}