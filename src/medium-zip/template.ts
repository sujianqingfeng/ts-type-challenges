type ArrayD<T, C extends number = 1> = T extends [infer H, ...infer R]
  ? C extends 1
    ? H
    : R
  : never;

type Zip1<T, U> = ArrayD<T> extends never
  ? ArrayD<U> extends never
    ? []
    : []
  : ArrayD<U> extends never
  ? []
  : [[ArrayD<T>, ArrayD<U>], ...Zip<ArrayD<T, 2>, ArrayD<U, 2>>];

type Zip<T, U> = T extends [infer H, ...infer R]
  ? U extends [infer H2, ...infer R2]
    ? [[H, H2], ...Zip<R, R2>]
    : []
  : [];
