import React, { useState, useRef } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { TableCell, TableRow as MUITableRow } from "@material-ui/core";

import useStyles from "./Table.styles";

export interface CellItemProps {
  value: any;
  onCellClick?: any;

  className?: string;
}

export interface TableRowProps {
  data: CellItemProps;
  onClick: any;
  keyField: any;
}

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
          // align="left"
          classes={{
            root: classes.cellRoot,
          }}
          className={itemValue.className}
          onClick={() => itemValue.onCellClick(keyField)}
        >
          {itemValue.value}
          {/* <MoreVertIcon
            className={classes.rowMenuIcon}
            ref={anchorRef}
            role="button"
            aria-hidden="true"
            onClick={() => handleToggle(item?._id)}
          /> */}
        </TableCell>
      ))}
    </MUITableRow>
  );
};

export default TableRow;
