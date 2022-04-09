type FlattenOnce<T> = T extends [infer H, ...infer R]
  ? H extends any[]
    ? [...H, ...FlattenOnce<R>]
    : [H, ...FlattenOnce<R>]
  : T;

// 利用数组来存储多少次遍历

type FlattenDepth<T, D = 1, U extends any[] = []> = FlattenOnce<T> extends T
  ? T
  : U["length"] extends D
  ? T
  : FlattenDepth<FlattenOnce<T>, D, [...U, unknown]>;
