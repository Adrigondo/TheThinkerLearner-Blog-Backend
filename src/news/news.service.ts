import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNewsInput } from './dto/create-news.input';
import { News, NewsDocument } from './schemas/news.schema';

@Injectable()
export class NewsService {
    constructor(@InjectModel(News.name) private newsModel: Model<NewsDocument>) {}
    
    async create(createNewsData: CreateNewsInput): Promise<News> {
        const createdNews = new this.newsModel(createNewsData);
        return createdNews.save();
    }

    async findAll(): Promise<News[]> {
        return this.newsModel.find().exec();
    }
}
