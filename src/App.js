import React from 'react';
// import React, { useEffect } from 'react';
// import { Container, AppBar, Typography } from '@material-ui/core' ;
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core' ;
// import { useDispatch } from 'react-redux';

// import  { getNetIncome } from './actions/actions';
// import useStyles from './styles';
import Main from './components/Main';

function App() {
  // const classes = useStyles();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getNetIncome);
  // }, [dispatch]);

  return (
    <div>
      <Main/>
    </div>
  );
}

export default App;
