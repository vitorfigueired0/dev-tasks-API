import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor( private readonly prisma: PrismaService) {}
  private readonly logger = new Logger(AppService.name)
  
  getHello(): string {
    return 'Hello World!';
  }


}
