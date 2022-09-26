import { Directive, Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType({ description: 'user' })
export class UserModel {
  @Field(type => ID)
  id: string;
  
  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field()
  firstname!: string;

  @Field()
  lastname!: string;

  @Field()
  birthday!: Date;

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