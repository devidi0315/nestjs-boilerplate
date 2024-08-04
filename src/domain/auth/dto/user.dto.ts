import { PickType } from '@nestjs/swagger';
import { UserEntity } from 'src/entity/UserEntity';

export class CreateEmailUserDto extends PickType(UserEntity, [
  'email',
  'password',
]) {}
