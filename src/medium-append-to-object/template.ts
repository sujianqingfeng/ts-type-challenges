// 如果存在同一个K,用后面的的key

type AppendToObject<T extends Record<string, any>, U extends string, V> = {
  [P in keyof T | U]: U extends P ? V : T[P];
};
