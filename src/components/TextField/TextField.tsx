import React, { ChangeEvent } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import classNames from "classnames";
import NumberFormat from "react-number-format";

import useStyles from "./TextField.styles";

function NumberFormatCustom(props) {
  const { inputRef, onChange, name, suffix, max, min, ...other } = props;

  const isAllowed = ({ floatValue }) => {
    let minCondition = true;
    let maxCondition = true;
    if (max !== null && floatValue > max) {
      maxCondition = false;
    }

    if (min !== null && floatValue < min) {
      minCondition = false;
    }

    return minCondition && maxCondition;
  };
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
            name,
          },
        });
      }}
      isAllowed={isAllowed}
      thousandSeparator
      suffix={suffix}
    />
  );
}

interface ITextFieldComponent {
  showStartAdornment?: boolean;
  handleChange?: (e: ChangeEvent) => void;
  onTextChange?: (value: string) => void;
  icon?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  name: string;
  inputClasses?: any;
  suffix?: string;
  min?: number;
  max?: number;
  isNumber?: boolean;
}

function TextFieldComponent({
  showStartAdornment = false,
  handleChange = () => {},
  onTextChange = () => {},
  icon = null,
  placeholder = "",
  value = "",
  label = "",
  name,
  inputClasses = null,
  suffix,
  min,
  max,
  isNumber,
}: ITextFieldComponent) {
  const classes = useStyles();

  const onChange = (e: ChangeEvent) => {
    handleChange?.(e);
    onTextChange?.((e?.target as any)?.value ?? "");
  };

  return (
    <div className={classes.inputContainer}>
      <TextField
        variant="outlined"
        label={label}
        className={classes.textField}
        placeholder={placeholder}
        fullWidth
        onChange={onChange}
        value={value}
        name={name}
        InputProps={{
          inputProps: { suffix, min, max },
          ...(isNumber ? { inputComponent: NumberFormatCustom } : {}),
          classes: {
            root: classNames(classes.cssOutlinedInput, inputClasses),
            focused: classes.focused,
            notchedOutline: classes.notchedOutline,
            error: classes.errorInput,
          },
          type: "text",
          startAdornment: showStartAdornment && (
            <>
              <InputAdornment position="start">
                <img src={icon} className={classes.icon} alt="" />
              </InputAdornment>
            </>
          ),
        }}
      />
    </div>
  );
}

TextFieldComponent.defaultProps = {
  showStartAdornment: false,
  handleChange: () => {},
  icon: null,
  placeholder: "",
  value: "",
  label: "",
  inputClasses: null,
  suffix: "",
  min: null,
  max: null,
  isNumber: false,
};

export default TextFieldComponent;
