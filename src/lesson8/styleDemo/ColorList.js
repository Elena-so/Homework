import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Color from "./Color";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { useColors } from "./ColorProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    
  },
  tab: {
    
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
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

const ColorList = () => {
  const classes = useStyles();
  const { colors } = useColors();
  const [flag,setFlag]=useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <div style={{marginLeft:50,marginTop:10,marginBottom:10}}> 
  
        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
          <Tab label="ColorList" {...a11yProps(0)} />
          <Tab label="TodoList" {...a11yProps(1)} />
        </Tabs>

      <TabPanel value={value} index={0}>
      <div className={classes.root}>
      {colors.length === 0 ? (
        <p>No Colors Listed. (Add a Color)</p>
      ) : (
          colors.map((c) => <Paper elevation={3} ><Color key={c.id} {...c} /></Paper>)
        )}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
       Todo
      </TabPanel>

     
    </div>
  );
};

export default ColorList;
