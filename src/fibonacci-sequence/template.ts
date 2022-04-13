// 4
// 1 -> [1] [1]
// 2 -> [1,1] [1]
// 3 -> [1,1,1] [1,1]
// 4 -> [1,1,1,1,1] [1,1,1]

type Fibonacci<
  Count extends number,
  Index extends any[] = [1],
  Result extends any[] = [1],
  LastResult extends any[] = []
> = Index["length"] extends Count
  ? Result["length"]
  : Fibonacci<Count, [...Index, 1], [...Result, ...LastResult], Result>;
