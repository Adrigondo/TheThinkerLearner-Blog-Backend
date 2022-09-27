import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Type, Transform, Exclude } from 'class-transformer';
import { News } from 'src/news/schemas/news.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Transform(({ value }) => value.toString())
  _id: string;

  @Prop()
  username: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  @Exclude()
  password: string;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  birthday: Date;
  
  @Prop({default:null})
  picture: string;
  
  @Type(() => News)
  news: News[];
}

export const UserSchema = SchemaFactory.createForClass(User);
/* UserSchema.virtual('news', {
  ref: 'News',
  localField: '_id',
  foreignField: 'author',
}); */

// export {UserSchema};