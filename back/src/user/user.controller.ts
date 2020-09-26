import { Controller, Get } from "@nestjs/common";
import { UserService } from './user.service'

@Controller('api/users/tp')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getThirdPartyUsers() {
    return this.userService.getThirdPartyUsers()
  }
}