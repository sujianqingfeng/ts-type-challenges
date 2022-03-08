type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & {
  [P in MyExclude<keyof T, K>]: T[P];
};
