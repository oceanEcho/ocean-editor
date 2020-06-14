export const groupObjectArrayByKey = (sourceArray: Array<any>, key: string) => {
  let result = sourceArray.reduce((result: any, item: any) => {
    result[item[key]] = result[item[key]] || [];
    result[item[key]].push(item);

    return result;
  }, {});

  return Object.values(result);
};
