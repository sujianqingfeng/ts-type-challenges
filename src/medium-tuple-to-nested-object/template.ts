type TupleToNestedObject<T extends any[], U> = T extends []
  ? U
  : T extends [infer F, ...infer R]
  ? { [K in F & string]: TupleToNestedObject<R, U> }
  : never;
