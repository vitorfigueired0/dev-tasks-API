import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { LoggerModule } from 'nestjs-pino';
import { format } from 'date-fns';



@Module({
  imports: [UserModule, TaskModule, AuthModule, LoggerModule.forRoot({
    pinoHttp: {
      timestamp: () => `,"time":"${format(Date.now(), 'dd/MM/yyyy HH:mm:ss')}"`,
      msgPrefix: '[DEV-TASKS] ',
      transport: {
        target: 'pino-pretty',
        options: {
          singleLine: true,
        }
      }
    }
  })],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
