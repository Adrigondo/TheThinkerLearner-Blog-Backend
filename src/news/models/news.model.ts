import { Directive, Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { type } from 'os';

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

}