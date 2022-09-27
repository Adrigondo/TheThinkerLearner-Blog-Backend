import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform, Type } from 'class-transformer';
import mongoose, { Document, ObjectId } from 'mongoose';
import { User } from 'src/users/schemas/users.schema';

export type NewsDocument = News & Document;

@Schema()
export class News {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  picture: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  @Type(()=>User)
  author: User;

}

export const NewsSchema = SchemaFactory.createForClass(News);