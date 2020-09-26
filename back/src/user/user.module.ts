import { Module, HttpModule } from '@nestjs/common';
import { UserService } from './user.service'
import { UserController } from './user.controller';

@Module({
  imports: [HttpModule],
  controllers: [UserController],
  providers: [UserService]
})

export class UserModule { }