import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateNewsInput } from './dto/update-news.input';
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
  
    async findOne(id: string) {
      const news= await this.newsModel.findById(id).exec();
      /* const news= await this.newsModel.findById(id).populate({
        path: 'author'
      }).exec(); */
      if(!news){
        throw new NotFoundException();
      }
      return news;
    }
  
    async update(id: string, updateNewsData: UpdateNewsInput) {
      const updateNews = this.newsModel.findByIdAndUpdate(id, updateNewsData).exec();
      return updateNews;
    }
  
    async remove(id: string) {
      const removeNews = this.newsModel.findByIdAndRemove({ _id: id }).exec();
      return removeNews;
    }
}
