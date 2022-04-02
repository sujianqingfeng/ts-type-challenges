type Traverse<T> = {
  [K in keyof T]: T[K];
};

type PartialByKeys<T, U = any> = Traverse<
  {
    [K in keyof T as K extends U ? K : never]?: T[K];
  } & {
    [K in MyExclude<keyof T, U>]: T[K];
  }
>;
