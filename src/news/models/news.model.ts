import { Directive, Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { type } from 'os';
import { User } from 'src/users/schemas/users.schema';

@ObjectType({ description: 'news' })
export class NewsModel {
  @Field(type => ID)
  id: string;
  
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  picture: string;

  @Field()
  createdAt: Date;
  
  @Field()
  updatedAt: Date;

  /* @Field(type=>User)
  @Type(()=>User)
  author: User; */

}