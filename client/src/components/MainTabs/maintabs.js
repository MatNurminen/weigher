import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Weigher from '../Weigher';
import ListWeighers from '../ListWeighers';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MainTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='Punnitus' {...a11yProps(0)} />
          <Tab label='Punnitushistoria' {...a11yProps(1)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Weigher />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ListWeighers />
        </TabPanel>
      </Container>
    </div>
  );
}
// import React from 'react';
// import styles from './styles';
// import Container from '@material-ui/core/Container';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Box from '@material-ui/core/Box';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@material-ui/core/Link';

// function MainTabs({ classes }) {
//   return (
//     <div className={classes.root}>
//       <Container>
//         <Tabs
//           //value={value}
//           indicatorColor='primary'
//           textColor='primary'
//           //onChange={handleChange}
//           aria-label='disabled tabs example'
//         >
//           <Tab label='Active' />
//           <Tab label='Active' />
//         </Tabs>
//       </Container>
//     </div>
//   );
// }

// export default styles(MainTabs);
