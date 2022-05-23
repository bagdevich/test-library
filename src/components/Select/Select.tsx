import * as React from "react";
import { MenuItem, Select as MuiSelect } from "@material-ui/core";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";

import useStyles from "./Select.styles";

type OptionProps<T> = T & {
  value: string;
  displayValue: string;
};

interface SelectProps<T> {
  selected: string;
  options: OptionProps<T>[];
  handleChange: (e: React.ChangeEvent<{ value: string }>) => void;
  renderItem?: (value: OptionProps<T>) => JSX.Element;
}

function Select<T>({
  selected,
  options,
  handleChange,
  renderItem: Item,
}: SelectProps<T>) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <MuiSelect
        value={selected}
        onChange={handleChange}
        IconComponent={KeyboardArrowDownRoundedIcon}
      >
        {options.map((item) => (
          <MenuItem
            value={item.value}
            className={classes.option}
            key={item.value}
          >
            {Item ? <Item {...item} /> : item.displayValue}
          </MenuItem>
        ))}
      </MuiSelect>
    </div>
  );
}

export default Select;
