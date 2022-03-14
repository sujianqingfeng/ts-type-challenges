type ExtractType<T> = T extends Promise<infer P> ? ExtractType<P> : T;

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [P in keyof T]: ExtractType<T[P]> }>;
