// number 可以理解为数组的索引
// 对象的key的类型三种 string number symbol

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};
