import React, { useState } from "react";
import {
  Collapse,
  TableCell,
  TableRow as MUITableRow,
} from "@material-ui/core";

import useStyles from "./Table.styles";
import { TableRowProps } from "./types";
import { dataNormalizer } from "./helpers";

const TableRow: React.FC<TableRowProps> = ({
  data = {},
  onClick,
  keyField = {},
  collapseItem,
}) => {
  const classes = useStyles();

  const handleRowClick = () => {
    onClick(keyField);
  };

  const [isOpen, setIsOpen] = useState(true);

  const items = Object.entries(data);

  return (
    <>
      <MUITableRow
        className={classes.hover}
        // style={{ height: 76 }}
        onClick={handleRowClick}
      >
        {items.map(([item, itemValue]) => (
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
      {collapseItem?.length !== 0 && (
        <MUITableRow
          className={classes.hover}
          // style={{ height: 76 }}
          onClick={handleRowClick}
        >
          <TableCell colSpan={8} style={{ padding: "0px" }}>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              {collapseItem?.map((item) => {
                const [rowId, rowData, collapseItems] = item;

                // const normalizedCollapseItems = dataNormalizer(
                //   collapseItems,
                //   keyField,
                //   fieldExtractor
                // );

                return (
                  <TableRow
                    key={rowId}
                    keyField={rowId}
                    data={rowData}
                    onClick={onClick}
                    // collapseItem={normalizedCollapseItems}
                  />
                );
              })}
            </Collapse>
          </TableCell>
        </MUITableRow>
      )}
    </>
  );
};

export default TableRow;
