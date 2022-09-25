import { Directive, Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType({ description: 'user' })
export class UserModel {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field(type=>Int)
  age: number;
  
  @Field()
  breed: string;

  /* @Field(type => ID)
  id: string;
  
  @Directive('@upper')
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(type => [String])
  ingredients: string[]; */
}