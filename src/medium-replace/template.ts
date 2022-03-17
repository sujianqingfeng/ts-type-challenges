type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends ""
  ? S
  : S extends `${infer Head}${From}${infer Rest}`
  ? `${Head}${To}${Rest}`
  : S;
