import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { EmployeeModule } from './employee/employee.module';
import { Employees } from './employee/employee.entity';
import { EntryModule } from './entry/entry.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    EmployeeModule,
    EntryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private connection: Connection) {}
}