import React, { useState } from "react";
import { getComparator, stableSort } from "../helpers";

import { SortProps, TOrder } from "../types";

export interface TableSettingsProps {
  initialOrderField?: string;

  dataLength: number;
}

export default (
  config?: TableSettingsProps
): SortProps & { sort: (array: any[]) => any[] } => {
  const [orderDirection, setOrderDirection] = useState<TOrder>("desc");
  const [orderField, setOrderField] = useState<string>(
    config?.initialOrderField ?? ""
  );

  const onSort = (event: any, property: any) => {
    const isAsc = orderField === property && orderDirection === "asc";
    setOrderDirection(isAsc ? "desc" : "asc");
    setOrderField(property);
  };

  const sort = (data: any[]) => {
    return stableSort(data, getComparator(orderDirection, orderField));
  };

  return { onSort, orderField, orderDirection, sort: sort };
};
