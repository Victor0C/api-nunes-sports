import { DataSource } from 'typeorm';
import 'dotenv/config'



export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.HOST_DB,
        port: Number(process.env.PORT_DB),
        username: process.env.USER_DB,
        password: process.env.PASS_DB,
        database: process.env.DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      });


      return dataSource.initialize();
    },
  },
];
