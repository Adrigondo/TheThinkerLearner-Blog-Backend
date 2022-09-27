import mongoose, { Document, ObjectId } from 'mongoose';
export declare type NewsDocument = News & Document;
export declare class News {
    _id: ObjectId;
    title: string;
    content: string;
    picture: string;
}
declare const NewsSchema: mongoose.Schema<News, mongoose.Model<News, any, any, any, any>, {}, {}, {}, {}, "type", News>;
export { NewsSchema };
