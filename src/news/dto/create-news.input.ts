import { Field, InputType, Int, ID, DateScalarMode} from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';
import { type } from 'os';

@InputType()
export class CreateNewsInput {

  @Field()
  @IsOptional()
  title: string;

  @Field()
  @IsOptional()
  content: string;

  @Field()
  @IsOptional()
  picture: string;
}