import React, { useState,useEffect } from "react";
import { UserInput } from "./inputHook";
import { useColors } from "./ColorProvider";
import styled from "styled-components";
import styles from "./styles/App.module.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

// import "./styles/App.css";
const useStyles = makeStyles((theme) => ({
  root: {
  
    backgroundColor: theme.palette.background.paper,
  },
  
 
}));

export default function AddColorForm() {
  
  const [titleProps, resetTitle] = UserInput("");
  const [colorProps, resetColor] = UserInput("");
  const { addColor } = useColors();
  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetColor("");
    resetTitle("");
  };
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
};

  return (
    
    <form  style={{marginLeft:40,marginTop:10,marginBottom:10}}>   
      <TextField
        id="outlined-basic"
        style={{marginLeft:10}}
        className={styles.input}
        {...titleProps}
        type="text"
        placeholder="color title"
        required
      ></TextField>
      <TextField
        id="outlined-basic"
        className={styles.input}
        style={{ width:30}}
        {...colorProps}
        type="color"
        required
      ></TextField>
     
      <Button 
      variant="contained" 
      color="primary" 
      style={{marginLeft:10}}
      onClick={submit}
      >ADD</Button>
    
    </form>
  );
}
