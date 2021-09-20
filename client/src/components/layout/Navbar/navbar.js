import React, { useState, useMemo } from 'react';
import styles from './styles';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';

function Navbar({ classes, user, error, confirmError, logoutUser }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const isSignIn = !!user;
  const tabValue = false;

  const snackBar = (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={!!error}
      onClose={() => confirmError(null)}
      message={error}
      key='key'
    />
  );

  const tabItems = useMemo(
    () => [
      { label: 'Punnitushistoria', path: '/' },
      { label: 'Punnitus', path: '/punnitus' },
    ],
    []
  );

  const tabs = useMemo(
    () => (
      <React.Fragment>
        <Tabs
          value={tabValue}
          className={classes.tabContainer}
          textColor='#fff'
          classes={{
            indicator: classes.indicator,
          }}
        >
          {tabItems.map((tab, key) => (
            <Tab
              key={key}
              style={{
                textDecoration: 'none',
              }}
              className={classes.tab}
              label={tab.label}
              component={RouterLink}
              to={tab.path}
            />
          ))}
        </Tabs>
      </React.Fragment>
    ),
    [isSignIn]
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding>
          {tabItems.map((list, key) => (
            <ListItem
              key={key}
              button
              onClick={() => setOpenDrawer(false)}
              component={RouterLink}
              to={list.path}
            >
              <ListItemText
                disableTypography
                primary={
                  <Typography style={{ color: '#fff' }}>
                    {list.label}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h4'>
            <Box fontWeight='fontWeightBold' letterSpacing={4} mb={2}>
              <Link component={RouterLink} to='/' className={classes.link}>
                Weigher
              </Link>
            </Box>
          </Typography>
          {matches ? drawer : tabs}
          {snackBar}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default styles(Navbar);
