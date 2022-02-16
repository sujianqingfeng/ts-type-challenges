type MyExclude<T, U> = T extends U ? never : T;

// union types 中 extends 对比规则是交叉对比
type b = "a" | "b" | "c";
type c = "a" | "b";

type d = b extends c ? "111" : "22";
