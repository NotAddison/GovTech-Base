import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// NESTJS Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/nest'), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
