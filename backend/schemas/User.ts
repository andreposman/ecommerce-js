import { list } from '@keystone-next/keystone/schema';
import { text, password } from '@keystone-next/fields';

export const User = list({
  // access:
  // ui:
  fields: {
    name: text({ isIndexed: true }),
    email: text({ isIndexed: true, isUnique: true }),
    password: password(),
    // TODO: add roles, cart, orders
  },
});
