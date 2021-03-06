import get from "lodash.get";

import { CellItemProps } from "../types";

interface ConfiguredItem {
  [key: string]: CellItemProps;
}

export type NormalizedData = [string, ConfiguredItem, any];

interface Extractor {
  [key: string]: {
    render: any;
    onCellClick: any;
  };
}

export const dataNormalizer = (
  data: any = [],
  keyField: string,
  fieldExtractor: Extractor
): NormalizedData[] => {
  const res = data.map((item: any) => {
    const itemId = item[keyField];

    const itemsConfiguration: ConfiguredItem = Object.entries(
      fieldExtractor
    ).reduce((prev, current) => {
      const [key, config] = current;
      let newItem: CellItemProps;

      newItem = {
        ...config,
        value: config.render(item[key], item[keyField]),
      };

      return { ...prev, [key]: newItem };
    }, {});

    const collapseItem = item.data;

    return [itemId, itemsConfiguration, collapseItem];
  });

  return res;
};

export const getDefaultExtractor = () => ({
  render: (value: any) => value,
});

export const descendingComparator = (a, b, orderField) => {
  const firstVal = get(a, orderField, "-");
  const secondVal = get(b, orderField, "-");
  const isStringComp =
    typeof firstVal === "string" && typeof secondVal === "string";

  if (isStringComp) {
    return secondVal.localeCompare(firstVal);
  }
  return secondVal - firstVal;
};

export const getComparator = (order, orderField) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderField)
    : (a, b) => -descendingComparator(a, b, orderField);
};

export const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};
