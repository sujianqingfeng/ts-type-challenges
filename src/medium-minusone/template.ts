type Make10Array<T extends any[]> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T
];

type Make1Array<T, L extends any[] = []> = `${L["length"]}` extends T
  ? L
  : Make1Array<T, [...L, 1]>;

type AddEqualArrayLength<
  T extends string,
  L extends any[] = []
> = T extends `${infer U}${infer R}`
  ? AddEqualArrayLength<R, [...Make10Array<L>, ...Make1Array<U>]>
  : L;

type MinusOne<T extends number> = AddEqualArrayLength<`${T}`> extends [
  infer _,
  ...infer R
]
  ? R["length"]
  : never;

// ts里面没有运算，通过数组的长度来表示
// 同时 ts里面的循环有限制，所有生成数组的时候，要考虑到循环次数

// Make1Array +1
// Make10Array *10

// AddEqualArrayLength
// 比如 21
// 先取第一位 1 通过 Make1Array 生成长度为2的数组 as A
// 然后取第二位 1 通过Make1Array生成长度为1的数组 + 通过Make10Array生成A * 10长度的数组 = 21
