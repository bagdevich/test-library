import React from "react";

import search from "assets/svg/search.svg";
import TextField from "../TextField";

import useStyles from "./Search.styles";

export interface SearchProps {
  onChange?: any;
  value: string;
  onTextChange?: any;
  disableOuterPadding?: boolean;
}

const Search: React.FC<SearchProps> = ({
  onChange,
  value,
  onTextChange,
  disableOuterPadding = false,
}) => {
  const classes = useStyles({ disableOuterPadding });
  return (
    <div className={classes.searchFieldContainer}>
      <TextField
        handleChange={onChange}
        showStartAdornment
        icon={search}
        placeholder="Search"
        value={value}
        name="search"
        onTextChange={onTextChange}
      />
    </div>
  );
};

export default Search;
