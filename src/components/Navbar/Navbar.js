import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';
import { NavbarStyle } from './NavbarStyle.js';

const useStyles = makeStyles((theme) => NavbarStyle(theme));

export const NavBar = () => {
  
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            To-Do List example
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}


