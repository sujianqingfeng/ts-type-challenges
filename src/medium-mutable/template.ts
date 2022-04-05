// 减号的运用

type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};
