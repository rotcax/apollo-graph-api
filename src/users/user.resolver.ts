import { Resolver, Arg, Query, Mutation } from 'type-graphql';
import { Inject } from 'typedi';
import User from './user.type';
import UserInput from './user.input';
import UserService from './user.service';

@Resolver(of => User)
export default class UserResolver {
  @Inject()
  private userService: UserService;

  @Query(returns => User, { nullable: true })
  user(@Arg('id') id: number) {
    return this.userService.find(id);
  }

  @Mutation(returns => User)
  createUser(@Arg('data') data: UserInput) {
    return this.userService.create(data);
  }
}
