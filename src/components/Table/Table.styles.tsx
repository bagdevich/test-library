import { makeStyles } from "@material-ui/core";

import Colors from "styles/Color.styles";
import "styles/fonts.scss";
import tableStyles from "styles/commonTable.styles";

const useStyles = makeStyles(() => ({
  ...tableStyles(),
  contentCard: {
    borderRadius: "16px",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
    padding: "24px 8px",
    marginBottom: "24px",
  },
  firstName: {
    display: "flex",
    alignItems: "center",
  },
  addicon: {
    "&.MuiSvgIcon-root": {
      width: "18px",
      height: "18px",
    },
    marginRight: "9px",
  },
  cardTitle: {
    marginBottom: "24px",
    fontSize: "18px",
    lineHeight: "28px",
    fontFamily: "Poppins-semibold, sans-serif",
    color: Colors.greyIcon,
  },
  cellRoot: {
    position: "relative",
    fontFamily: "Lato-normal, sans-serif",
    fontSize: "14px",
    color: Colors.backgroundGrey,
    padding: "27px 16px",
    borderBottom: "none",
  },
  hover: {
    borderRadius: "0px 8px 8px 0px",
    "&:hover": {
      backgroundColor: "rgba(148, 157, 176, .08)",
      borderRadius: "0px 8px 8px 0px",
      cursor: "pointer",
    },
  },

  itemContainer: {
    minHeight: "172px",
    borderRadius: "16px",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
    margin: "24px",
  },
  closeBtn: {
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: "24px",
    paddingRight: "24px",
    marginRight: "20px",
  },
  actionContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchFieldContainer: {
    display: "flex",
    boxSizing: "border-box",
    width: "320px",
    height: "52px",
    padding: "0px 16px",
  },
  capitalize: {
    textTransform: "capitalize",
  },
  rowMenuIcon: {
    color: Colors.subtitleGrey,
    cursor: "pointer",
    position: "absolute",
    fontSize: "24px !important",
    "&:hover": {
      color: Colors.darkest2Grey,
    },
  },
  rowIconContainer: {
    display: "flex",
    alignSelf: "center",
    width: "30px",
    paddingTop: "35px",
  },
  deleteAction: {
    color: Colors.red,
  },
}));

export default useStyles;
