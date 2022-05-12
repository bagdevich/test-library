import React, { useState } from "react";
import {
  Table as MUITable,
  TableBody,
  TableContainer,
  TablePagination,
} from "@material-ui/core";

import { TOrder } from "./types";

import TableHead from "./TableHead";
import TableRow, { CellItemProps } from "./TableRow";
import useStyles from "./Table.styles";
import { dataNormalizer } from "./helpers";

export interface TableProps {
  data: any[];
  pagination?: boolean;
  headConfig: any;
  onRowClick?: any;
  keyField: string;
  fieldExtractor: any;
}

const Table: React.FC<TableProps> = ({
  data,
  pagination,
  headConfig,
  onRowClick,
  keyField,
  fieldExtractor,
}) => {
  const classes = useStyles();
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [orderDirection, setOrderDirection] = useState<TOrder>("desc");
  const [orderField, setOrderField] = useState<string>("created");

  const handleChangePage = (_, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderField === property && orderDirection === "asc";
    setOrderDirection(isAsc ? "desc" : "asc");
    setOrderField(property);
  };

  return (
    <div className={classes.tableContainer}>
      <TableContainer style={{ overflowX: "auto" }}>
        <MUITable className={classes.table}>
          {data?.length > 0 && (
            <TableHead
              headCells={headConfig}
              orderDirection={orderDirection}
              orderField={orderField}
              onRequestSort={handleRequestSort}
            />
          )}
          <TableBody>
            {dataNormalizer(data, keyField, fieldExtractor)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => {
                return (
                  <TableRow
                    data={item[1]}
                    onClick={onRowClick}
                    keyField={item[0]}
                  />
                );
              })}
          </TableBody>
        </MUITable>
      </TableContainer>
      {pagination && (
        <TablePagination
          classes={{ toolbar: classes.pagination }}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Users per page:"
        />
      )}
    </div>
  );
};

export default Table;
