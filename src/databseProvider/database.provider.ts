import { createConnection } from 'typeorm';
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: '',
        password: '',
        database: 'postgres',
        entities: ['dist/user/entities' + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
