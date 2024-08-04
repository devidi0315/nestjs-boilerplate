import { BaseException } from 'src/lib/exception/base.exception';

const UserExceptionGroup = 'user';

const UserException = {
  NotFoundException: (id: string) =>
    new BaseException({
      code: 1000,
      message: 'User not found',
      data: id,
      group: UserExceptionGroup,
    }),
};

export default UserException;
