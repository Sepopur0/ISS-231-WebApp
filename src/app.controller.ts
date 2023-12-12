import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Employee } from './class';


@Controller('employee')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/login/:id')
  async logIn(): Promise<any> {
    return await this.appService.logIn();
  }
  @Get(':id')
  async getEmployee(@Param('id') id:string): Promise<any> {
    return await this.appService.getEmployee(id);
  }

  @Post('/table')
  async addEmployee(@Body() employee:Employee): Promise<any>{
    return await this.appService.addEmployee(employee);
  }


}
