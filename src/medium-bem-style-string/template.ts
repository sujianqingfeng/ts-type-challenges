type BEMFormat<
  T extends string[],
  F extends string = "__"
> = T["length"] extends 0 ? "" : `${F}${T[number]}`;

type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${BEMFormat<E, "__">}${BEMFormat<M, "--">}`;
