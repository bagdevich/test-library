import React from "react";
import { TableCell, TableRow as MUITableRow } from "@material-ui/core";

import useStyles from "./Table.styles";
import { TableRowProps } from "./types";

const TableRow: React.FC<TableRowProps> = ({ data, onClick, keyField }) => {
  const classes = useStyles();

  const handleRowClick = () => {
    onClick(keyField);
  };

  return (
    <MUITableRow
      className={classes.hover}
      // style={{ height: 76 }}
      onClick={handleRowClick}
    >
      {Object.entries(data).map(([item, itemValue]) => (
        <TableCell
          classes={{
            root: classes.cellRoot,
          }}
          className={itemValue.className}
          onClick={() => itemValue.onCellClick(keyField)}
        >
          {itemValue.value}
        </TableCell>
      ))}
    </MUITableRow>
  );
};

export default TableRow;
