"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_news_input_1 = require("./dto/create-news.input");
const update_news_input_1 = require("./dto/update-news.input");
const news_model_1 = require("./models/news.model");
const news_service_1 = require("./news.service");
let NewsResolver = class NewsResolver {
    constructor(newsService) {
        this.newsService = newsService;
    }
    async getNews(id) {
        return this.newsService.findOne(id);
    }
    async getAllNews() {
        return this.newsService.findAll();
    }
    async createNews(createNewsInput) {
        return this.newsService.create(createNewsInput);
    }
    async updateNews(updateNewsInput) {
        return this.newsService.update(updateNewsInput.id, updateNewsInput);
    }
    async removeNews(id) {
        return this.newsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => news_model_1.NewsModel),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NewsResolver.prototype, "getNews", null);
__decorate([
    (0, graphql_1.Query)(() => [news_model_1.NewsModel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NewsResolver.prototype, "getAllNews", null);
__decorate([
    (0, graphql_1.Mutation)(() => news_model_1.NewsModel),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_news_input_1.CreateNewsInput]),
    __metadata("design:returntype", Promise)
], NewsResolver.prototype, "createNews", null);
__decorate([
    (0, graphql_1.Mutation)(() => news_model_1.NewsModel),
    __param(0, (0, graphql_1.Args)('updateNewsInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_news_input_1.UpdateNewsInput]),
    __metadata("design:returntype", Promise)
], NewsResolver.prototype, "updateNews", null);
__decorate([
    (0, graphql_1.Mutation)(() => news_model_1.NewsModel),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NewsResolver.prototype, "removeNews", null);
NewsResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsResolver);
exports.NewsResolver = NewsResolver;
//# sourceMappingURL=news.resolver.js.map