type GetPercentage<A> = A extends `${infer P}%`
  ? [P, "%"]
  : A extends ""
  ? ["", ""]
  : [A, ""];

type PercentageParser<A extends string> = A extends `${infer H}${infer Rest}`
  ? H extends "+" | "-"
    ? [H, ...GetPercentage<Rest>]
    : ["", ...GetPercentage<A>]
  : ["", "", ""];
