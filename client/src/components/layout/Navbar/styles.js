import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  toolbar: {
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  link: {
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  tabContainer: {
    marginRight: 'auto',
  },
  tab: {
    marginLeft: '50px',
    fontWeight: 700,
    fontSize: '14.5px',
    letterSpacing: 6,
    color: '#fff',
    '&:hover': {
      color: '#fff',
    },
  },
  drawer: {
    backgroundColor: '#897a73',
  },
  drawerIconContainer: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    color: '#fff',
  },
  drawerIcon: {
    height: '30px',
    width: '30px',
  },
  indicator: {
    backgroundColor: '#fff',
    height: '3px',
  },
});

export default (component) => withStyles(styles)(component);
