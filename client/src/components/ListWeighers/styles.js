import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    maxHeight: 540,
  },
});

export default (component) => withStyles(styles)(component);
