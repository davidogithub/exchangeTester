// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Followers, User } = initSchema(schema);

export {
  Followers,
  User
};