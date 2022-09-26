import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UserModel } from './models/user.model';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(()=>String!)
  async ImGreeting(){
    return 'hello';
  }

  @Query(()=>[UserModel]!)
  async users(){
    return this.usersService.findAll();
  }

  @Mutation(()=>UserModel!)
  async createUser(@Args('input') input:CreateUserInput){
    return this.usersService.create(input);
  }
}
