// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tutorials, Links, Reservations, Times, User, Blocks, Rooms, Dates } = initSchema(schema);

export {
  Tutorials,
  Links,
  Reservations,
  Times,
  User,
  Blocks,
  Rooms,
  Dates
};