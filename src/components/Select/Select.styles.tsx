import { makeStyles } from '@material-ui/core';

import Colors from 'styles/Color.styles';

const useStyles = makeStyles((theme) => ({
  container: {
    '& .MuiSelect-select.MuiSelect-select': {
      padding: '7px 24px 9px 14px',
      width: '188px',
      height: '22px',
      border: `1px solid ${Colors.borderCardGrey}`,
      borderRadius: '8px',
      fontFamily: 'Lato-Normal, sans-serif',
      fontSize: '16px',
      lineHeight: '24px',
      color: Colors.backgroundGrey,
      textTransform: 'capitalize',
    },
    '& .MuiInput-underline:before, .MuiInput-underline:after, .MuiInput-underline:hover:not(.Mui-disabled):before':
      {
        border: 'none',
      },
    '& .MuiSelect-select:focus': {
      backgroundColor: Colors.white,
    },
    '& .MuiSvgIcon-root': {
      right: '8px',
      color: Colors.subtitleGrey,
    },

    [theme.breakpoints.down(1080)]: {
      '& .MuiSelect-select.MuiSelect-select': {
        width: '100px',
      },
    },
  },
  option: {
    textTransform: 'capitalize',
  },
}));

export default useStyles;
