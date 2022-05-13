import { makeStyles } from "@material-ui/core";

import "styles/fonts.scss";

const useStyles = makeStyles(() => ({
  searchFieldContainer: {
    display: "flex",
    boxSizing: "border-box",
    width: "320px",
    height: "52px",
    padding: ({ disableOuterPadding }) =>
      disableOuterPadding ? "0" : "0px 16px",
  },
}));

export default useStyles;
