import { makeStyles } from "@material-ui/core";

import Colors from "styles/Color.styles";
import "styles/fonts.scss";
import {
  hexToRgbAString,
  hexColorToHslWithShade,
} from "./helpers/colorConverters";

const styles = () => ({
  rootBtn: {
    "&.MuiButtonBase-root": {
      padding: 0,
      borderRadius: "8px",
      fontFamily: "Lato-Bold, sans-serif",
      fontSize: "14px",
      textTransform: "none",
      color: Colors.white,
      boxSizing: "border-box",
    },
  },
  activeGreen: {
    "&.MuiButtonBase-root": {
      width: (props) => props.width || "83px",
      height: (props) => props.height || "36px",
      padding: "0px 5px",
      backgroundColor: Colors.mainGreen,
      boxShadow: "0px 8px 16px rgba(95, 187, 80, 0.24)",
    },
    "&:hover": {
      backgroundColor: Colors.hoverDarkGreen,
      boxShadow: "none",
    },
    "&:disabled": {
      boxShadow: "none",
      backgroundColor: (props) =>
        props.loading ? Colors.mainGreen : Colors.disabledGrey,
      color: Colors.disabledText,
    },
  },
  borderedGreen: {
    "&.MuiButtonBase-root": {
      width: (props) => props.width || "64px",
      minWidth: (props) => props.width || "64px",
      height: (props) => props.height || "30px",
      minHeight: (props) => props.height || "30px",
      padding: "0px 5px",
      backgroundColor: "transparent",
      color: Colors.mainGreen,
      border: `solid 1px ${Colors.mainGreen}`,
      fontSize: "13px",
      lineHeight: "13px",
      margin: 0,
    },
    "&:hover": {
      backgroundColor: Colors.mainGreen,
      color: Colors.white,
    },
    "&:disabled": {
      backgroundColor: Colors.disabledGrey,
      color: Colors.disabledText,
      border: `solid 1px ${Colors.disabledGrey}`,
    },
  },
  activeGrey: {
    "&.MuiButtonBase-root": {
      width: (props) => props.width || "83px",
      height: (props) => props.height || "36px",
      padding: "0px 5px",
      backgroundColor: Colors.greyDE,
      boxShadow: "0px 8px 16px rgba(145, 158, 171, 0.24)",
      color: Colors.backgroundGrey,
    },
    "&:hover": {
      backgroundColor: Colors.grey5,
    },
  },
  transparentButton: {
    "&.MuiButtonBase-root": {
      width: (props) => props.width || "75px",
      height: (props) => props.height || "36px",
      marginTop: (props) => props?.marginTop || "0px",
      marginRight: (props) => props?.marginRight,
      padding: "0px 5px",
      backgroundColor: "transparent",
      border: "1px solid rgba(145, 158, 171, 0.32)",
      color: Colors.backgroundGrey,
      fontSize: "14px",
    },
    "&:hover": {
      backgroundColor: Colors.grey5,
      boxShadow: "none",
    },
  },
  transparentGreenText: {
    "&.MuiButtonBase-root": {
      width: (props) => props.width || "75px",
      height: (props) => props.height || "36px",
      marginTop: (props) => props?.marginTop || "0px",
      marginRight: (props) => props?.marginRight,
      padding: "0px 5px",
      backgroundColor: Colors.white,
      color: Colors.mainGreen,
      fontSize: "14px",
    },
    "&:hover": {
      boxShadow: "none",
      color: Colors.hoverDarkGreen,
    },
    "&:disabled": {
      color: Colors.disabledText,
    },
  },
  transparentGreyBorderBtn: {
    "&.MuiButtonBase-root": {
      width: (props) => props.width || "75px",
      height: (props) => props.height || "36px",
      backgroundColor: Colors.white,
      color: Colors.backgroundGrey,
      fontFamily: "lato-bold, sans-serf",
      border: "solid 1px rgba(145, 158, 171, 0.32)",
      fontSize: "13px",
      marginTop: (props) => props.marginTop || "0px",
      "&:hover": {
        backgroundColor: Colors.lightBackgroundGrey,
        boxShadow: "none",
      },
    },
    "&:disabled": {
      backgroundColor: Colors.disabledGrey,
      color: Colors.disabledText,
      border: `solid 1px ${Colors.disabledGrey}`,
    },
  },
  greyBtn: {
    "&.MuiButtonBase-root": {
      width: (props) => props.width || "75px",
      height: (props) => props.height || "36px",
      boxShadow: "0px 8px 16px rgba(145, 158, 171, 0.24)",
      backgroundColor: Colors.disabledGrey,
      color: Colors.backgroundGrey,
      fontFamily: "lato-bold, sans-serf",
      fontSize: "13px",
      marginTop: (props) => props.marginTop || "0px",
      marginRight: (props) => props?.marginRight,
      "&:hover": {
        backgroundColor: Colors.lightBackgroundGrey,
        boxShadow: "none",
      },
    },
    "&:disabled": {
      boxShadow: "none",
      backgroundColor: (props) =>
        props.loading ? Colors.mainGreen : Colors.disabledGrey,
      color: Colors.disabledText,
    },
  },
  nextIcon: {
    color: Colors.white,
  },
  nextButton: {
    boxShadow: "0px 8px 16px rgba(95, 187, 80, 0.24)",
  },
  nextButtonDisabled: {
    boxShadow: "none",
    backgroundColor: Colors.disabledGrey,
    color: Colors.disabledText,
  },
  disabledIcon: {
    color: Colors.disabledText,
  },
  backButton: {
    "&.MuiButtonBase-root": {
      textTransform: "capitalize",
      width: "90px",
      height: "36px",
      color: Colors.backgroundGrey,
    },
  },
  backIcon: {
    transform: "rotate(180deg)",
  },
  loader: {
    color: Colors.white,
  },
  redButton: {
    "&.MuiButtonBase-root": {
      width: (props) => props.width || "90px",
      minHeight: (props) => props.height || "36px",
      marginTop: (props) => props.marginTop || "0px",
      marginRight: (props) => props.marginRight,
      padding: "0px 5px",
      backgroundColor: Colors.error,
      color: Colors.white,
      boxShadow: "0px 8px 16px rgba(255, 72, 66, 0.24)",
      fontSize: "15px",
    },
    "&:hover": {
      backgroundColor: Colors.darkError,
      boxShadow: "none",
    },
  },
  transparentBtn: {
    "&.MuiButtonBase-root": {
      width: (props) => props.width || "90px",
      minHeight: (props) => props.height || "36px",
      marginTop: (props) => props.marginTop || "0px",
      padding: "0px 5px",
      backgroundColor: Colors.white,
      color: Colors.backgroundGrey,
      fontSize: "14px",
      border: `1px solid ${Colors.disabledGrey}`,
    },
    "&:hover": {
      backgroundColor: Colors.disabledGrey,
    },
    "&:disabled": {
      backgroundColor: Colors.disabledGrey,
      color: Colors.disabledText,
    },
  },

  active: {
    "&.MuiButtonBase-root": {
      width: ({ width }) => width,
      height: ({ height }) => height,
      marginRight: ({ marginRight }) => marginRight,
      padding: "6px 16px",
      backgroundColor: (props) => props.backgroundColor ?? Colors.mainGreen,
      boxShadow: ({ backgroundColor }) =>
        `0px 8px 16px ${hexToRgbAString(
          backgroundColor ?? Colors.mainGreen,
          0.24
        )}`,
    },

    "&:disabled": {
      boxShadow: "none",
      backgroundColor: ({ loading, backgroundColor }) =>
        loading ? backgroundColor ?? Colors.mainGreen : Colors.disabledGrey,
      color: Colors.disabledText,
    },
    "&:hover": {
      backgroundColor: ({ backgroundColor }) =>
        `${hexColorToHslWithShade(backgroundColor ?? Colors.mainGreen)}`,
      boxShadow: "none",
    },
  },
});

export default makeStyles(styles);
