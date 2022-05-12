import * as React from "react";
import {
  Button as MuiButton,
  ButtonProps,
  CircularProgress,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import classNames from "classnames";

import useStyles from "./Button.styles";

export type ButtonStyle =
  | "activeGreen"
  | "borderedGreen"
  | "transparentButton"
  | "transparentGreenText"
  | "transparentGreyBorderBtn"
  | "activeGrey"
  | "backButton"
  | "greyBtn"
  | "redButton"
  | "transparentBtn"
  | "rootBtn"
  | "active";

export interface TButton extends ButtonProps {
  children: any;
  onClick?: (values: any | undefined) => void | Promise<void>;
  styleClass: ButtonStyle;
  disabledClass?: string;
  disabled?: boolean;
  type?: any;
  width?: string;
  marginTop?: string;
  marginRight?: string;
  height?: string;
  nextButton?: boolean;
  backButton?: boolean;
  icon?: any;
  loading?: boolean;
  backgroundColor?: string;
  rootClasses?: string;
}
const Button = React.forwardRef<HTMLButtonElement, TButton>(
  (
    {
      children,
      onClick,
      styleClass,
      disabled,
      disabledClass,
      type,
      width,
      height,
      marginTop,
      nextButton,
      marginRight,
      backButton,
      icon,
      loading,
      backgroundColor,
      rootClasses,
      ...props
    },
    ref
  ) => {
    const classes = useStyles({
      width,
      marginTop,
      height,
      marginRight,
      loading,
      backgroundColor,
    });

    console.log(styleClass);
    console.log(backgroundColor);
    const customRootClasses = classNames(classes[styleClass], rootClasses);

    return (
      <MuiButton
        ref={ref}
        onClick={onClick}
        className={classes.rootBtn}
        classes={{
          root: customRootClasses,
          disabled: classes[disabledClass],
        }}
        disabled={disabled}
        type={type}
        {...props}
      >
        {loading ? (
          <CircularProgress size={22} className={classes.loader} />
        ) : (
          <>
            {icon}
            {backButton && <NavigateNextIcon className={classes.backIcon} />}
            {children}
            {nextButton && (
              <NavigateNextIcon
                className={!disabled ? classes.nextIcon : classes.disabledIcon}
              />
            )}
          </>
        )}
      </MuiButton>
    );
  }
);

Button.defaultProps = {
  disabled: false,
  disabledClass: "",
  type: "button",
  onClick: () => {},
  width: "",
  marginTop: "",
  height: "",
  marginRight: "",
  nextButton: false,
  backButton: false,
  icon: "",
  loading: false,
  backgroundColor: null,
  rootClasses: null,
};

export default Button;
