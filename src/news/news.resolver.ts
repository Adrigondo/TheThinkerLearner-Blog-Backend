import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateNewsInput } from './dto/create-news.input';
import { NewsModel } from './models/news.model';
import { NewsService } from './news.service';

@Resolver()
export class NewsResolver {
  constructor(private readonly newsService: NewsService) {}

  @Query(()=>[NewsModel])
  async getNews(){
    return this.newsService.findAll();
  }

  @Mutation(()=>NewsModel)
  async createNews(@Args('input') input:CreateNewsInput){
    return this.newsService.create(input);
  }
}
