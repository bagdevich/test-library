import { CellItemProps } from "../TableRow";

type NormalizedData = [string, CellItemProps];

export const dataNormalizer = (
  data: any,
  keyField: string,
  fieldExtractor: any
): NormalizedData[] => {
  const res = data.map((item: any) => {
    return [
      item[keyField],
      Object.entries(fieldExtractor).reduce((prev, current) => {
        const [key, config] = current;
        let newItem: CellItemProps;

        newItem = {
          ...config,
          value: config.render(item[key]),
        };

        return { ...prev, [key]: newItem };
      }, {}),
    ];
  });

  console.log(res);
  return res;
};
