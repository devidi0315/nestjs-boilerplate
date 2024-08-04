import { StringProperty } from 'src/lib/validator/string';

export class EmailAndPassordLoginDto {
  @StringProperty({ description: '유저가 로그인할때 쓰는 아이디' })
  email: string;

  @StringProperty({
    description: '유저가 로그인할때 쓰는 비밀번호',
  })
  password: string;
}

export class AuthTokenDto {
  @StringProperty({ description: 'JWT 토큰' })
  accessToken: string;

  @StringProperty({ description: 'JWT 리프레시 토큰' })
  refreshToken: string;

  @StringProperty({ description: 'JWT 토큰 만료 시간' })
  expiresIn: number;
}
