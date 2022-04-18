// type AAA = number extends 2 ? true : false;
// type CCC = string[]['length']

// 1.首先判断数组结构
// 2.排除是数组  数组['length']返回的是number
type IsTuple<T> = T extends readonly unknown[]
  ? number extends T["length"]
    ? false
    : true
  : false;
