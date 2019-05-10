import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigModule],
  exports: [ConfigModule]
})
export class ConfigModule {}
