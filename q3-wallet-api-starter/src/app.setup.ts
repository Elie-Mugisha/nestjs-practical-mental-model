import { INestApplication, ValidationPipe } from '@nestjs/common';

/**
 * Global configuration shared by main.ts AND the test suite.
 * Register your global interceptors / filters here (or with APP_INTERCEPTOR /
 * APP_FILTER in a module - both are fine).
 */
export function configureApp(app: INestApplication): void {
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  // TODO (Task 1): global ResponseEnvelopeInterceptor
  // TODO (Task 2): global AllExceptionsFilter
  // TODO (Task 3): global ResponseTimeInterceptor
}
