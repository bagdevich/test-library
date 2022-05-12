import Colors from 'styles/Color.styles';
import 'styles/fonts.scss';

const styles = () => ({
  cellRootHead: {
    fontFamily: 'Lato-Normal, sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    color: Colors.subtitleGrey,
    backgroundColor: Colors.lightBackgroundGrey,
    borderBottom: 'none',
    '&.MuiTableCell-root': {
      padding: '16px',
    },
  },
  table: {
    minWidth: '100%',
    '& .MuiPaper-elevation1': {
      boxShadow:
        '0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)',
    },
  },
  tableSmall: {
    minWidth: 300,
    '& .MuiPaper-elevation1': {
      boxShadow:
        '0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)',
    },
  },
  cellRoot: {
    position: 'relative',
    fontFamily: 'Lato-SemiBold, sans-serif',
    fontSize: '14px',
    color: Colors.subtitleGrey,
    padding: '0px 16px',
    borderBottom: 'none',
  },
  cellRootRightAlign: {
    display: 'flex',
    width: '100%',
    height: 'inherit',
    justifyContent: 'flex-end',
  },
  cellLast: {
    borderRadius: '0px 8px 8px 0px',
    paddingRight: '16px',
  },
  cellFirst: {
    borderRadius: '8px 0px 0px 8px',
  },
  cellStatus: {
    fontFamily: 'Lato-SemiBold, sans-serif',
    fontSize: '14px',
    color: Colors.subtitleGrey,
    padding: '27px 0px',
    borderBottom: 'none',
    display: 'flex',
    justifyContent: 'center',
    width: '40px',
  },
  cellStatusHead: {
    fontFamily: 'Lato-Normal, sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    color: Colors.subtitleGrey,
    backgroundColor: Colors.lightBackgroundGrey,
    borderBottom: 'none',
    width: '60px',
    padding: '16px 0px',
  },
  pagination: {
    borderTop: 'solid 2px rgba(145, 158, 171, 0.24)',
    '& .MuiTypography-body2': {
      fontFamily: 'Lato-Normal, sans-serif',
      color: Colors.greyIcon,
      fontSize: '14px',
    },
    '& .MuiPaper-rounded': {
      borderRadius: '8px',
    },
  },
  tableContainer: {
    paddingBottom: '12px',
    marginTop: '20px',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  menuIcon: {
    color: Colors.subtitleGrey,
    cursor: 'pointer',
    fontSize: '20px !important',
    '&:hover': {
      color: Colors.darkest2Grey,
    },
  },
  cellLastMenu: {
    borderRadius: '0px 8px 8px 0px',
    fontFamily: 'Lato-SemiBold, sans-serif',
    fontSize: '14px',
    color: Colors.subtitleGrey,
    padding: '27px 0px',
    borderBottom: 'none',
    width: '20px',
    paddingRight: '16px',
  },
  sortIcon: {
    '&.MuiSvgIcon-root': {
      height: '18px',
    },
  },
  bodyRow: {
    height: '76px',
    cursor: 'pointer',
  },
  headRow: {
    height: '56px',
  },
});

export default styles;
