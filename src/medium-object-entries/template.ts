type R<T> = {
  [K in keyof T]-?: T[K];
};

type ObjectEntries<T, K = keyof T> = K extends keyof T
  ? [K, T[K] extends undefined ? undefined : R<T>[K]]
  : never;
