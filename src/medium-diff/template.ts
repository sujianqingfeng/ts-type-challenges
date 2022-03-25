// type Diff<O, O1> = {
//   [K in MyExclude<keyof O | keyof O1, keyof O & keyof O1>]: K extends keyof O
//     ? O[K]
//     : K extends keyof O1
//     ? O1[K]
//     : never;
// };

// 这里巧妙的是 必定有一个是全量,一个部分
// 用全量去排除部分，就能得到差异

type Diff<O, O1> = O extends O1
  ? {
      [K in MyExclude<keyof O1, keyof O>]: O1[K];
    }
  : Diff<O1, O>;
