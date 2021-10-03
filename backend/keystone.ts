import 'dotenv/config';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import { insertSeedData } from './seed-data';

const dbUrl = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // time signed in
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: add roles here
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: dbUrl,
      async onConnect(keystone) {
        console.log('Connected to Database');
        if (process.argv.includes('--seed-data'))
          await insertSeedData(keystone);
      },
    },
    lists: createSchema({
      //   schema items go here
      User,
      Product,
      ProductImage,
    }),
    ui: {
      //  show the ui only for those who pass the test,
      isAccessAllowed: ({ session }) => {
        console.log(session);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return !!session?.data;
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: 'id',
    }),
  })
);
