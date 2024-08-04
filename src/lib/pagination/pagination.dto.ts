import { ApiProperty } from '@nestjs/swagger';

export class PaginationDto {
  @ApiProperty({ type: 'number', description: '페이지' })
  currentPage: number;

  @ApiProperty({ type: 'number', description: '한 페이지당 갯수' })
  pageSize?: number;

  @ApiProperty({ type: 'number', description: '총 페이지' })
  totalPages?: number;

  @ApiProperty({ type: 'number', description: '총 아이템 갯수' })
  totalCount?: number;
}

export class RequestPaginationDto {
  @ApiProperty({ type: 'number', description: '페이지' })
  page: number;

  @ApiProperty({ type: 'number', description: '한 페이지당 갯수' })
  pageSize?: number;
}

export class WithPagination<T> {
  @ApiProperty({ type: PaginationDto, description: '페이지 정보' })
  pagination: PaginationDto;

  @ApiProperty({ type: 'array', description: '데이터' })
  items: T[];
}
