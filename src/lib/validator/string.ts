import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

interface StringOption {
  description?: string;
}

export function StringProperty(option: StringOption) {
  return applyDecorators(
    ApiProperty({ type: 'string', description: option.description }),
    IsString(),
  );
}
