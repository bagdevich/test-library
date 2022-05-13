import { PaginationProps } from "../Table";

export const defaultPagination: PaginationProps = {
  page: 0,
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 25],
  labelRowsPerPage: "Items:",
};
