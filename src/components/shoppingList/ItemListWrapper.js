import React from 'react';
import './ItemListWrapper.css'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const moment = require('moment');

const useStyles = makeStyles({
  root: {
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'column'
  },

  title: {
    marginTop: 10
  }
});

var now = moment();

const ItemListWrapper = ({ form, children }) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        {moment().format("M[월] DD[일]")}
      </Typography> 

      <Typography variant="h6">
        <section className="form-wrapper">
          {form}
        </section>
        <section className="todos-wrapper">
          {children}
        </section>
      </Typography>

    </main>
  );
};

export default ItemListWrapper;