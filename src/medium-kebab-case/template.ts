// 遇到小写 就把之前的字符串给小写化 之所以要小写化 因为第一个字符可能是大写
// 知道遇到大写就加一个中横线

type KebabCase<S extends string> = S extends `${infer H}${infer R}`
  ? R extends Uncapitalize<R>
    ? `${Uncapitalize<H>}${KebabCase<R>}`
    : `${Uncapitalize<H>}-${KebabCase<R>}`
  : S;
