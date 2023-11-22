import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('multiply')
  multiplyNumber(data: number[]) {
    console.log(`multiplying number with ${data[0]} and ${data[1]}`);
    return this.appService.multiplyNumber(data);
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
