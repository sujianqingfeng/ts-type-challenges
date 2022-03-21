type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends any
  ? [T, ...Permutation<MyExclude<U, T>>]
  : never;

// union types 中 extends 对比规则是交叉对比
// U 使用的比较巧妙，用来存储原始数据 去获得当前遍历元素之外的元素
