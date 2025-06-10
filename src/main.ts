import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle(
      'Imersão Profissional: Desenvolvimento aplicação web com BackEnd respondendo para FrontEnd',
    )
    .setDescription('API de cadastro de produtos com NestJS e Swagger')
    .setVersion('1.0')
    .addTag('Products')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove propriedades não definidas nos DTOs
      forbidNonWhitelisted: true, // lança erro se propriedades não permitidas forem passadas
      transform: true, // transforma tipos automaticamente (ex: string para number)
      errorHttpStatusCode: 422, // código de status HTTP para erros de validação
    }),
  );

  const port = process.env.PORT || 3001;

  await app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
bootstrap();
