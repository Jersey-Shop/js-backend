import { VersioningType, VERSION_NEUTRAL } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from '@src/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      origin: "http://localhost:4200",
      methods: ["*"],
      allowedHeaders: ["*"],
      credentials: true,
    },
    rawBody: true,
  });
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: VERSION_NEUTRAL
  });
  await app.listen(3000);
}

bootstrap()
  .then(() => console.log("Startup server"))
  .catch((err) => console.error(err));
