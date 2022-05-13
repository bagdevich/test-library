import React from "react";
import {
  Table as MUITable,
  TableBody,
  TableContainer,
  TablePagination,
} from "@material-ui/core";

import TableHead from "./TableHead";
import TableRow from "./TableRow";
import useStyles from "./Table.styles";
import { dataNormalizer } from "./helpers";
import { defaultPagination } from "./constants";
import { TableProps } from "./types";

const Table: React.FC<TableProps> = ({
  data,
  sort,
  pagination = defaultPagination,
  headConfig,
  onRowClick,
  keyField,
  fieldExtractor,
  customHeaderStyles,
}) => {
  const classes = useStyles();

  const {
    page,
    rowsPerPage,
    rowsPerPageOptions,
    onChangePage,
    onChangeRowsPerPage,
    labelRowsPerPage,
  } = pagination;

  return (
    <div className={classes.tableContainer}>
      <TableContainer style={{ overflowX: "auto" }}>
        <MUITable className={classes.table}>
          {data?.length > 0 && (
            <TableHead
              headCells={headConfig}
              orderDirection={sort?.orderDirection}
              orderField={sort?.orderField}
              onRequestSort={sort?.onSort}
              customStyles={customHeaderStyles}
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
      {pagination?.enabled && (
        <TablePagination
          classes={{ toolbar: classes.pagination }}
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={data?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
          labelRowsPerPage={labelRowsPerPage}
        />
      )}
    </div>
  );
};

export default Table;
