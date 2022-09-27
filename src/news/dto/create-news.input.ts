import { Field, InputType, Int, ID, DateScalarMode} from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';
import { type } from 'os';

@InputType()
export class CreateNewsInput {
  @Field(type => ID)
  id: string;

  @Field()
  newsname: string;

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

  @Field()
  @IsOptional()
  picture: string;
}