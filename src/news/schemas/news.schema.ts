import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform, Type } from 'class-transformer';
import mongoose, { Document, ObjectId } from 'mongoose';
import { User } from 'src/users/schemas/users.schema';

export type NewsDocument = News & Document;

@Schema({timestamps:true})
export class News {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  picture: string;

  /* 
  @Transform(({ value }) => value.toString())
  created_at: Date;

  @Prop({type:Date})
  updated_at: Date */
  /* @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  @Type(()=>User)
  author: User; */

}


const NewsSchema = SchemaFactory.createForClass(News);
/* NewsSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
}); */

export {NewsSchema}