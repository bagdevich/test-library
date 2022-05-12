import React, { SyntheticEvent } from "react";
import classnames from "classnames";
import {
  TableCell,
  TableHead as MUTableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";

import useStyles from "./Table.styles";

export interface TableHeadProps {
  orderDirection: any;
  orderField: string;
  onRequestSort: (event: SyntheticEvent, property: string) => void;
  headCells: any;
}

const TableHead = ({
  headCells,
  orderDirection,
  orderField,
  onRequestSort,
}: TableHeadProps) => {
  const classes = useStyles();
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
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
                classes[headCell?.extraClass]
              ),
            }}
          >
            <TableSortLabel
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
