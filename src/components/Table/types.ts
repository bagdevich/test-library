import { SyntheticEvent } from "react";
import { NormalizedData } from "./helpers";

export type TOrder = "asc" | "desc";

export interface TableHeadProps {
  orderDirection: any;
  orderField?: string;
  onRequestSort?: (event: SyntheticEvent, property: string) => void;
  headCells: any;
  customStyles?: any;
}

export interface PaginationProps {
  enabled?: boolean;
  rowsPerPage: number;
  page: number;
  rowsPerPageOptions: number[];
  onChangePage?: any;
  onChangeRowsPerPage?: any;
  labelRowsPerPage: string;
}

export interface SortProps {
  onSort: (event: SyntheticEvent, property: string) => void;
  orderDirection?: string;
  orderField?: string;
}
export interface TableProps {
  data: any[];
  sort?: SortProps;
  pagination?: PaginationProps;
  headConfig: any;
  onRowClick?: any;
  keyField: string;
  fieldExtractor: any;
  customHeaderStyles?: any;
}

export interface CellItemProps {
  value: any;
  onCellClick?: any;

  className?: string;
}

export interface TableRowProps {
  data?: { [key: string]: CellItemProps };
  onClick?: any;
  keyField?: string;
  collapseItem?: NormalizedData[];
}
