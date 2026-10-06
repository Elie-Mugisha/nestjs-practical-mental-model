import { Controller, Get } from '@nestjs/common';

// TODO (Task 2): both routes in this controller must stay reachable WITHOUT a token.
@Controller()
export class AppController {
  @Get()
  info() {
    return {
      name: 'Team Tasks API',
      hint: 'Send "Authorization: Bearer <token>". Run "npm test" in a new terminal to check your solution.',
      testTokens: {
        admin: 'token-amina',
        member: ['token-brian', 'token-chloe'],
        viewer: 'token-diego',
      },
    };
  }

  @Get('health')
  health() {
    return { status: 'ok' };
  }
}
