import { Module } from '@nestjs/common'
import { CoreModule } from '@two-step/core'
import { UserModule } from 'apps/two-step-api/src/user/user.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'


@Module({
  imports: [CoreModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
