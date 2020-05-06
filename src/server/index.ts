import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import UserResolver from '../users/user.resolver';
import formatError from '../errors/argument.format';

export default async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    container: Container
  });

  return new ApolloServer({
    schema,
    formatError,
    tracing: true
  });
}
