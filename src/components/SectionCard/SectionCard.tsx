import * as React from 'react';
import useStyles from './SectionCard.styles';

type TSectionCard = {
  children: any;
  padding?: string;
};

function SectionCard({ children, padding }: TSectionCard) {
  const classes = useStyles({ padding });
  return <div className={classes.sectionCard}>{children}</div>;
}

SectionCard.defaultProps = {
  padding: '',
};

export default SectionCard;
