type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer Rest
) => void
  ? Rest
  : never;
