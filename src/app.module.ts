import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      // PRODUCTION MODE:
      // debug: false,
      // playground: false,
    }),
    MongooseModule.forRoot((new ConfigService).get("DATABASE_URI")),


    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
