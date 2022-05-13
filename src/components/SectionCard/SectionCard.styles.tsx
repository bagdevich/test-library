// @ts-nocheck
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  sectionCard: {
    borderRadius: '16px',
    boxShadow: '0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)',
    padding: (props) => props.padding || '40px',
    marginBottom: '24px',
    boxSizing: 'border-box',
    position: 'relative',
    flexGrow: 1,
    '@media (max-width: 970px)': {
      padding: () => '15px',
    },
  },
}));

export default useStyles;
