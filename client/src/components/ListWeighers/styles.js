import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  container: {
    maxHeight: 540,
  },
});

export default (component) => withStyles(styles)(component);
