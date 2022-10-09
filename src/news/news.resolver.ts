import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateNewsInput } from './dto/create-news.input';
import { UpdateNewsInput } from './dto/update-news.input';
import { NewsModel } from './models/news.model';
import { NewsService } from './news.service';

@Resolver()
export class NewsResolver {
  constructor(private readonly newsService: NewsService) {}

  
  @Query(() => NewsModel)
  async getNews(@Args('id') id: string) {
    return this.newsService.findOne(id);
  }

  @Query(()=>[NewsModel])
  async getAllNews(){
    return this.newsService.findAll();
  }

  @Mutation(()=>NewsModel)
  async createNews(@Args('input') createNewsInput:CreateNewsInput){
    console.log(createNewsInput);
    return this.newsService.create(createNewsInput);
  }


  @Mutation(() => NewsModel)
  async updateNews(@Args('input') updateNewsInput: UpdateNewsInput) {
    return this.newsService.update(updateNewsInput.id, updateNewsInput);
  }

  @Mutation(() => NewsModel)
  async removeNews(@Args('id') id: string) {
    return this.newsService.remove(id);
  }
}
