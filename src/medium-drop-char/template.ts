// type DropChar<
//   S extends string,
//   C extends string
// > = S extends `${infer H}${C}${infer R}` ? `${H}${DropChar<R, C>}` : S;

type DropChar<
  S extends string,
  C extends string
> = S extends `${infer H}${infer R}`
  ? H extends C
    ? `${DropChar<R, C>}`
    : `${H}${DropChar<R, C>}`
  : S;
