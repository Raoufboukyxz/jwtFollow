import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { RepoProviders } from './Repositories.providers';

@Module({
  providers: [...databaseProviders, ...RepoProviders],
  exports: [...databaseProviders, ...RepoProviders],
})
export class DatabaseModule {}
