// 这里处理的比较巧妙 如果不是字符串 最后会转成字符串 然后处理字符串的逻辑

type Absolute<T extends number | string | bigint> = T extends string
  ? T extends `-${infer H}`
    ? `${H}`
    : `${T}`
  : Absolute<`${T}`>;
