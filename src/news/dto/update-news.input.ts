import { Field, InputType, Int, ID, DateScalarMode} from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';
import { type } from 'os';
// import { AuthorUsers } from './schemas/author-users.schema';

@InputType()
export class UpdateNewsInput {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  picture: string;
}