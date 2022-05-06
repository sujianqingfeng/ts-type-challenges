type Without<T, U> = T extends [infer H, ...infer R]
  ? H extends MyExclude<T[number], U extends unknown[] ? U[number] : U>
    ? [H, ...Without<R, U>]
    : Without<R, U>
  : T;
