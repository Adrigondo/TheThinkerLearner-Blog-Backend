import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors();
  const PORT = parseInt(process.env.PORT) || 3000;
  await app.listen(PORT, () => {
      console.log(`Our app is running on port ${ PORT }`);
  });
}
bootstrap();
