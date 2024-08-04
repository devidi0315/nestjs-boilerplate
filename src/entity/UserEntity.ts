import { ApiProperty } from '@nestjs/swagger';

export enum Role {
  User = 'user',
  Admin = 'admin',
}

export class UserEntity {
  @ApiProperty({ type: 'string', description: 'The id of the user' })
  id: string;

  @ApiProperty({ type: 'string', description: '유저가 로그인할때 쓰는 아이디' })
  username: string;

  @ApiProperty({
    enum: Role,
    description: '유저의 권한',
  })
  role?: Role;

  @ApiProperty({
    type: 'string',
    description: '유저가 로그인할때 쓰는 비밀번호',
  })
  password?: string;

  @ApiProperty({
    type: 'string',
    description: '유저가 로그인할때 쓰는 비밀번호',
  })
  email?: string;
}
