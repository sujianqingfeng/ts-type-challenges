type Fill<
  T extends unknown[],
  N,
  S extends number = 0,
  E extends number = T["length"],
  A extends unknown[] = []
> = T extends [infer L, ...infer R]
  ? A["length"] extends S
    ? S extends E
      ? [...A, ...T] // 如果开始和结束一致  原数据返回
      : Fill<R, N, [...A, N]["length"] & number, E, [...A, N]> // 开始填充 填充一个就改变S的值
    : Fill<R, N, S, E, [...A, L]> // 还没有到填充的开始索引 就用之前的值
  : A; // 如果是空数组
