import { Resolver, Query, Mutation, Args, Int} from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserModel } from './models/user.model';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  /* @Query(()=>String)
  async ImGreeting(){
    return 'hello';
  } */

  @Query(() => UserModel)
  async getUser(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Query(()=>[UserModel])
  async getUsers(){
    return this.usersService.findAll();
  }

  @Mutation(()=>UserModel)
  async createUser(@Args('input') createUserInput:CreateUserInput){
    return this.usersService.create(createUserInput);
  }


  @Mutation(() => UserModel)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => UserModel)
  async removeUser(@Args('id') id: string) {
    return this.usersService.remove(id);
  }
}
