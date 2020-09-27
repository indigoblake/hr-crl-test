import { Controller, Get, Header } from '@nestjs/common';
import { throws } from 'assert';
import { EntryService } from './entry.service';

@Controller('api/entries')
export class EntryController {
  constructor(private employeeService: EntryService) {}

  @Get('tp')
  @Header('Access-Control-Allow-Origin', '*')
  getThirdPartyEntries() {
    return this.employeeService.getThirdPartyEntries()
  }
}