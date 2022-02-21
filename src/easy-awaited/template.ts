type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer P>
  ? P extends Promise<unknown>
    ? MyAwaited<P>
    : P
  : never;

// 之所以要这样子些 Promise里面可能还会是Promise

// 首先通过infer取出类型
// 判断类型是否还是一个Promise 如果是就递归判断 如果不是就返回取出的类型
