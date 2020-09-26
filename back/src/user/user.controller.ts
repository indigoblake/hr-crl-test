import { Controller, Get, Header } from "@nestjs/common";
import { UserService } from './user.service'

@Controller('api/users/tp')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  getThirdPartyUsers() {
    return this.userService.getThirdPartyUsers()
  }
}