export { default } from "./Table";
export { default as useDefaultSorting } from "./hooks/useDefaultSorting";
export { default as useDefaultPagination } from "./hooks/useDefaultPagination";
export { getDefaultExtractor } from "./helpers";

export type {
  CellItemProps,
  PaginationProps,
  SortProps,
  TOrder,
  TableHeadProps,
  TableProps,
  TableRowProps,
} from "./types";
