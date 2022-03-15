type LookUp<U, T extends string> = U extends { type: infer V }
  ? T extends V
    ? U
    : never
  : never;

// 先取出 U 是不是存在type  如果存在并取出值 然后 再判断
