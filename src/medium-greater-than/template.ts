// 这里判断第二个值满足相等，就能确定

type GreaterThan<
  T extends number,
  U extends number,
  R extends unknown[] = []
> = R["length"] extends T
  ? false
  : R["length"] extends U
  ? true
  : GreaterThan<T, U, [...R, 1]>;
