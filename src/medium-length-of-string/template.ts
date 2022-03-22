type LengthOfString<
  S extends string,
  L extends any[] = []
> = S extends `${infer F}${infer R}`
  ? R extends ""
    ? [...L, F]["length"]
    : LengthOfString<R, [...L, F]>
  : 0;

// 用元组的长度来表示字符串的长度

// 递归
// 存储上一次遍历的元组,向下传递 直到最后遍历到空字符串
