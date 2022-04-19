// R 用来存储结果 不停的递归
// 当遍历到最后的时候 去判断之前的结果是否存在
// 不存在说明为空   存在就返回之前的结果

type Chunk<T, N extends number, R extends any[] = []> = T extends [
  infer H,
  ...infer Rest
]
  ? R["length"] extends N
    ? [R, ...Chunk<Rest, N, [H]>]
    : Chunk<Rest, N, [...R, H]>
  : R["length"] extends 0
  ? []
  : [R];
