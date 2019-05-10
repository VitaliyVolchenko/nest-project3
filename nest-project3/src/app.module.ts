import { Module } from '@nestjs/common';
import { LocationModule } from './location/location.module';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [LocationModule, ConfigModule],
  providers: [ConfigService],  
})
export class AppModule {}
