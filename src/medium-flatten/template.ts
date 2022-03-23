type Flatten<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...Flatten<F>, ...Flatten<R>]
    : [F, ...Flatten<R>]
  : T;

// 还有一种思路
// 就是用第二参数来存储结果
