type ExceptionParam<T> = {
  code: number;
  message: string;
  data: T;
  group: string;
};

export class BaseException<T> extends Error {
  constructor(private readonly param: ExceptionParam<T>) {
    super(param.message);
  }
}
