type FalseUnion = 0 | "" | false | [] | Record<any, never>;

type AnyOf<T extends readonly any[]> = T[number] extends FalseUnion
  ? false
  : true;
