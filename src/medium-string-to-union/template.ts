type StringToUnion<T extends string> = T extends `${infer H}${infer R}`
  ? H | StringToUnion<R>
  : never;
