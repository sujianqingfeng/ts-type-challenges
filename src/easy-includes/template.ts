type IsEqual<X, Y> = (<T>() => T extends X ? true : false) extends <
  T
>() => T extends Y ? true : false
  ? true
  : false;

type Includes<T extends readonly unknown[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? IsEqual<U, First> extends true
    ? true
    : Includes<Rest, U>
  : false;
