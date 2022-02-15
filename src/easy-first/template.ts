// ------------
// 直接判断空数组

// type First<T extends any[]> = T extends [] ? never : T[0];

// ----------
// length
type test = [1, 2];
type length = test["length"];

// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];

// ------
//  number
type index = test[number];

// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// ------
// infer
type First<T extends any[]> = T extends [infer First, ...infer _]
  ? First
  : never;
