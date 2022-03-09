type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends { [key: string]: unknown }
    ? DeepReadonly<T[P]>
    : T[P];
};
