import { Field, InputType, Int, ID} from '@nestjs/graphql';
// import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class CreateUserInput {

  @Field()
  name: string;

  @Field(type => Int)
  age: number;

  @Field()
  breed: string;

  /* @Field()
  @MaxLength(30)
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  description?: string;

  @Field(type => [String])
  ingredients: string[]; */
}