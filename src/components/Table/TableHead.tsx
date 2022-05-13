import React, { SyntheticEvent } from "react";
import classnames from "classnames";
import {
  TableCell,
  TableHead as MUTableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";

import useStyles from "./Table.styles";
import { TableHeadProps } from "./types";

const TableHead = ({
  headCells,
  orderDirection,
  orderField,
  onRequestSort,
  customStyles = {},
}: TableHeadProps) => {
  const classes = useStyles();

  const createSortHandler = (property) => (event) => {
    onRequestSort?.(event, property);
  };

  return (
    <MUTableHead>
      <TableRow classes={{ root: classes.headRow }}>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderField === headCell.id ? orderDirection : false}
            classes={{
              root: classnames(
                classes.cellRootHead,
                customStyles[headCell?.extraClass] ||
                  classes[headCell?.extraClass]
              ),
            }}
          >
            <TableSortLabel
              disabled={!headCell.sort}
              active={orderField === headCell.id}
              direction={orderField === headCell.id ? orderDirection : "asc"}
              onClick={createSortHandler(headCell.id)}
              classes={{ icon: classes.sortIcon }}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </MUTableHead>
  );
};

export default TableHead;
