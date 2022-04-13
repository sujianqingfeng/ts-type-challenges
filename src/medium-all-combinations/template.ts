// 将String 转成 Union 类型

type StingToUnion<
  S extends string,
  R extends string = never
> = S extends `${infer H}${infer Rest}` ? StingToUnion<Rest, H | R> : R;

// 用R存储结果 默认值为''
// 利用union类型对比特性 将同值进行排除，用剩下的值递归对比，并存下结果传递
// 知道出现never类型为止
type Combination<S extends string, R extends string = "", K = S> = [S] extends [
  never
]
  ? R
  : K extends S
  ? Combination<MyExclude<S, K>, R | `${R}${K}`>
  : R;

type AllCombinations<S extends string> = Combination<StringToUnion<S>>;

// type BBBB = StingToUnion<"ABC">;
// type AAAA = AllCombinations<"ABC">;
