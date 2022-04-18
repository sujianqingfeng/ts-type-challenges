// type AAA = number extends 2 ? true :false

type IsTuple<T> = T extends readonly unknown[]
  ? number extends T["length"]
    ? false
    : true
  : false;
