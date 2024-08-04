import { Controller, Post } from '@nestjs/common';
import { EmailAndPassordLoginDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('login/email')
  async loginWithEmail(data: EmailAndPassordLoginDto) {
    console.log(data);
    return 'Login with email';
  }

  @Post('signup/email')
  async signupWithEmail(data: EmailAndPassordLoginDto) {
    console.log(data);
    return 'Signup with email';
  }
}
