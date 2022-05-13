// @ts-nocheck
import { makeStyles } from "@material-ui/core";
import Colors from "styles/Color.styles";
import "styles/fonts.scss";

const useStyles = makeStyles(() => ({
  container: {
    padding: "16px",
    borderRadius: "8px",
    border: "1px solid black",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  cellLast: {
    width: "60px",
  },
}));

export default useStyles;
