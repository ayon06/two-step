import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common'
import { configuration } from "../config/configuration";
import { validationSchema } from "../config/validation";
import { CoreResolver } from 'libs/core/src/lib/core.resolver';
import { GraphqlModule } from 'libs/core/src/graphql/graphql.module';
import { MongoModule } from 'libs/core/src/mongo/mongo.module';
import { ConfigModule } from 'libs/core/src/config/config.module';

@Module({
  imports: [
    ConfigModule,
    GraphqlModule,
    MongoModule
  ],
  providers: [CoreResolver],
  exports: [ConfigModule,
    GraphqlModule,
    MongoModule],
})
export class CoreModule { }
