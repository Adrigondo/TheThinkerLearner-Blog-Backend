import { Directive, Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType()
export class UserModel {
  @Field(type => ID)
  id: string;
  
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  birthday: Date;

  @Field({nullable: true})
  picture?: string;
}