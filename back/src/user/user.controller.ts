import { Controller, Get, Header } from "@nestjs/common";
import { UserService } from './user.service'

@Controller('api/users/')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('tp')
  @Header('Access-Control-Allow-Origin', '*')
  getThirdPartyUsers() {
    return this.userService.getThirdPartyUsers()
  }

  @Get('db')
  findAll() {
    return this.userService.findAll()
  }
}