import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import {SearchApplicationModule} from './search.application.module';
import {SearchApiModule} from './search.api.module';
import {SearchInfrastructureModule} from './search.infrastructure.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({isGlobal: true}),
    SearchApplicationModule,
    SearchApiModule,
    SearchInfrastructureModule,
  ],
  providers: [],
})
export class AppModule {}
