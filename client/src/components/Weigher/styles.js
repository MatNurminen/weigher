import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& > *:not(:last-child)': {
      marginRight: theme.spacing(2),
    },
  },
});

export default (component) => withStyles(styles)(component);
