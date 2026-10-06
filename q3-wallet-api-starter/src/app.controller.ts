import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  info() {
    return {
      name: 'Wallet API',
      tryThese: ['GET /wallets', 'GET /wallets/W-1001', 'GET /wallets/W-9999', 'GET /transfers', 'GET /debug/crash', 'GET /health'],
      hint: 'Open a new terminal and run "npm test" to check your solution.',
    };
  }

  // TODO (Task 1): load balancers expect this exact body, so it must NOT be
  // wrapped in the response envelope. Create a @RawResponse() decorator.
  @Get('health')
  health() {
    return { status: 'ok' };
  }
}
