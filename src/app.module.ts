import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';


import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      // PRODUCTION MODE:
      // debug: false,
      // playground: false,
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),


    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
