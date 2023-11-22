import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


export class AppService {
  multiplyNumber(data: number[]) {
    console.log(`multiplying number with ${data[0]} and ${data[1]}`)
    return data[0] * data[1];
  };
  getHello(): string {
    return 'Hello World!';
  }
}
