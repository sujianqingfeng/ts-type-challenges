type RequiredByKeys<T, U = any> = Traverse<
  {
    [K in MyExclude<keyof T, U>]?: T[K];
  } & {
    [K in keyof T as K extends U ? K : never]-?: T[K];
  }
>;
