type CamelCase<S> = S extends `${infer H}-${infer R}`
  ? R extends MyCapitalize<R>
    ? `${H}-${CamelCase<R>}`
    : `${H}${CamelCase<MyCapitalize<R>>}`
  : S;
