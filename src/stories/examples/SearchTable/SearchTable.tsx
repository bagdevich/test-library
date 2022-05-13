import React, { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import {
  ButtonMenu,
  Search,
  SectionCard,
  Table,
  useDefaultPagination,
  useDefaultSorting,
  getDefaultExtractor,
} from "../../../components";

import { headCells, mockData } from "../../../examples/Table/table.config";

import useStyles from "./SearchTable.styles";

const SearchTable = () => {
  const classnames = useStyles();

  const pagination = useDefaultPagination({ dataLength: mockData.length });
  const sort = useDefaultSorting();

  const fieldExtractor = {
    name: getDefaultExtractor(),
    role: getDefaultExtractor(),
    status: getDefaultExtractor(),
    more: {
      render: (value: any, key: string) => (
        <ButtonMenu styleClass="transparentButton" showExpandIcon={false}>
          <MoreVertIcon
            // className={classes.rowMenuIcon}

            role="button"
            aria-hidden="true"
          />
          <ButtonMenu.Item>Prop{key}</ButtonMenu.Item>
          <ButtonMenu.Item>Prop{key}</ButtonMenu.Item>
        </ButtonMenu>
      ),
      onCellClick: (key: any) => alert(JSON.stringify(key)),
    },
  };

  const [value, setValue] = useState("");

  return (
    <SectionCard>
      <div className={classnames.searchContainer}>
        <Search value={value} onTextChange={setValue} disableOuterPadding />
        <button>My Super Button</button>
      </div>
      <Table
        headConfig={headCells}
        data={sort.sort(mockData)}
        keyField={"id"}
        fieldExtractor={fieldExtractor}
        customHeaderStyles={classnames}
        pagination={pagination}
        sort={sort}
      />
    </SectionCard>
  );
};

export default SearchTable;
