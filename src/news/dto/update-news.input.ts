import { Field, InputType, Int, ID, DateScalarMode} from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';
import { type } from 'os';
// import { AuthorUsers } from './schemas/author-users.schema';

@InputType()
export class CreateNewsInput {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  picture: string;
}