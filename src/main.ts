import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export const PORT = process.env.PORT || 3000;

const chromeId = 'lppnphjckpnmekbjlciagcebgjempohh';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [ process.env.NODE_ENV === 'dev' ? '*' : `chrome-extension://${chromeId}`],
    credentials: true,
  });

  await app.listen(PORT, () => {
    console.log("Server started on: ", PORT);
    console.log("API URL: ", `http://localhost:${PORT}/`)
  });
}
bootstrap();
