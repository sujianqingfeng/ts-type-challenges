// 之所有要用字符串来表示，因为属性值可能为数字

type Flip<T> = {
  [K in keyof T as T[K] extends string | number | boolean
    ? `${T[K]}`
    : never]: K;
};
