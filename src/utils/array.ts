export function groupObjectArrayByKey<T>(sourceArray: Array<T>, key: keyof T): Array<T[]> {
  let result = sourceArray.reduce((result: any, item: T) => {
    result[item[key]] = result[item[key]] || [];
    result[item[key]].push(item);

    return result;
  }, {});

  return Object.values(result);
}
