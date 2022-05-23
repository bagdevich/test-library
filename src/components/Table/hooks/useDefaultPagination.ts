import { useState } from "react";

import { defaultPagination } from "../constants";
import { PaginationProps } from "../Table";

export interface TableSettingsProps {
  rowsPerPage?: number;
  rowsPerPageOptions?: number[];
  dataLength: number;
}

export default (config?: TableSettingsProps): PaginationProps => {
  const [page, setPage] = useState<number>(0);

  const [rowsPerPage, setRowsPerPage] = useState<number>(
    config?.rowsPerPage || defaultPagination.rowsPerPage
  );

  const handleChangePage = (_, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return {
    ...defaultPagination,
    enabled: config && config?.dataLength > 5,
    page,
    rowsPerPage,
    rowsPerPageOptions:
      config?.rowsPerPageOptions || defaultPagination.rowsPerPageOptions,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    onChangePage: handleChangePage,
  };
};
