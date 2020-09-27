import { Module, HttpModule } from '@nestjs/common';
import { EntryService } from './entry.service'
import { EntryController } from './entry.controller';

@Module({
  imports: [HttpModule],
  controllers: [EntryController],
  providers: [EntryService]
})

export class EntryModule { }