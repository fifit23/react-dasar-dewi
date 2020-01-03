import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core';

function Apps() {
  return (
    <Box display="flex" justifyContent="center"> 
        <React.Fragment>
      <AppBar position="static" style={{height: 60,backgroundColor:'orange', maxWidth:443, position:'fixed',}}>
      <Typography style={{marginLeft:'100px', marginTop:'25px', fontSize:'20px', fontWeight:800}}>  Appbar</Typography>
      </AppBar>
 
</React.Fragment>
    </Box>
  );
}

export default Apps;
