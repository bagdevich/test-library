// @ts-nocheck
import { makeStyles } from '@material-ui/core';
import Colors from 'styles/Color.styles';
import 'styles/fonts.scss';

const useStyles = makeStyles(() => ({
  inputContainer: {
    position: 'relative',
    width: '100%',
    '& .MuiFormLabel-root.Mui-focused': {
      color: Colors.mainGreen,
      fontFamily: 'Lato-Medium, sans-serif !important',
    },
    '& .MuiFormLabel-root': {
      color: Colors.placeholderColor,
      fontFamily: 'Lato-Medium, sans-serif !important',
    },
    '& .MuiInputBase-input': {
      fontFamily: 'Lato-Medium, sans-serif !important',
    },
  },
  textField: {
    width: '100%',
    outline: 'none',
  },
  cssOutlinedInput: {
    height: '56px',
    '&$focused $notchedOutline': {
      border: `2px solid  ${Colors.mainGreen}`,
    },
  },
  focused: {},
  errorInput: {},
  notchedOutline: {
    border: 'solid 1px rgba(145, 158, 171, 0.32)',
    borderRadius: '8px',
  },
  icon: {
    color: Colors.placeholderColor,
    marginRight: '7px',
    marginLeft: '3px',
  },
  selectRoot: {
    color: Colors.darkestGrey,
    fontSize: '18px',
    lineHeight: '18px',
    fontFamily: 'Lato-Normal, sans-serif',
    letterSpacing: '0.5px',
    backgroundColor: Colors.white,
    border: `solid 1px ${Colors.borderGrey}`,
    borderRadius: '8px',
  },
  containerFields: {
    display: 'grid',
    justifyContent: 'stretch',
    gridAutoFlow: 'dense',
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: 'auto',
    gap: '0px 24px',
    boxSizing: 'border-box',
    position: 'relative',
    fontFamily: 'Lato-Normal, sans-serif',
    margin: '0px auto 24px auto',
    width: '100%',
    '&.MuiInputBase-fullWidth': {
      height: '56px',
      boxSizing: 'border-box',
    },
    '& .Mui-focused.MuiAutocomplete-fullWidth': {
      border: `solid 2px ${Colors.mainGreen}`,
    },
    '& .Mui-focused.MuiInputLabel-outlined': {
      color: Colors.mainGreen,
      fontSize: '18px',
      backgroundColor: Colors.white,
    },
    '& .MuiInputLabel-outlined': {
      fontSize: '18px',
      backgroundColor: Colors.white,
      color: Colors.placeholderColor,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
      height: '56px',
    },
    '& .MuiFormLabel-root': {
      fontSize: '18px',
      padding: '0px 4px',
      fontFamily: 'Lato-Normal, sans-serif',
    },
    '& .MuiOutlinedInput-root': {
      border: 'none',
    },
    '& .MuiInputBase-root': {
      color: Colors.darkestGrey,
      fontSize: '18px',
      lineHeight: '18px',
      fontFamily: 'Lato-Normal, sans-serif',
    },
  },
  option: {
    fontSize: 18,
    marginRight: 10,
    fontFamily: 'Lato-Normal, sans-serif',
  },
  iconDropdown: {
    color: Colors.placeholderColor,
  },
}));

export default useStyles;
