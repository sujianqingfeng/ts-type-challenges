type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends ""
  ? S
  : S extends `${infer Head}${From}${infer Rest}`
  ? `${Head}${To}${ReplaceAll<Rest, From, To>}`
  : S;
