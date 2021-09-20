import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  '& > *': {
    margin: theme.spacing(1),
  },
});

export default (component) => withStyles(styles)(component);
