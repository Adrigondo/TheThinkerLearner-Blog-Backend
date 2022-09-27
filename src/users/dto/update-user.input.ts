import { Field, InputType, Int, ID, DateScalarMode} from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field(type => ID)
  id: string;

  @Field()
  @IsOptional()
  username: string;

  @Field()
  @IsOptional()
  email: string;

  @Field()
  @IsOptional()
  password: string;

  @Field()
  @IsOptional()
  firstname: string;

  @Field()
  @IsOptional()
  lastname: string;

  @Field()
  @IsOptional()
  birthday: Date;

  @Field()
  @IsOptional()
  picture: string;
}