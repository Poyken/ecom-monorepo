import { Body, Controller, Post } from '@nestjs/common';
import { LoginSchema } from '@repo/shared';
import { createZodDto } from 'nestjs-zod';

class LoginDto extends createZodDto(LoginSchema) {}

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body: LoginDto) {
    return body;
  }
}
