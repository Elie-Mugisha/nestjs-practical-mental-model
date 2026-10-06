import { INestApplication } from '@nestjs/common';

/**
 * Global configuration shared by main.ts AND the test suite.
 * Anything you register here (pipes, filters, interceptors...) is also
 * applied when the tests boot the application.
 */
export function configureApp(app: INestApplication): void {
  // TODO (Task 1): register a global ValidationPipe with the options described in README.md
}
