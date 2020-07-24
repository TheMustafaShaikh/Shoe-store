import React from 'react'
import Navbar from "./navbar"
import "./../App.css"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';    
import Button from '@material-ui/core/Button';  
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    width:{
        width: 500
    }
  }));
  
  

export default function Contact() {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <div className="contact">

                <h1>Contact us</h1>
                <form className={classes.root} noValidate autoComplete="off">
                <TextField
          label="Name"
          id="outlined-size-small"
          variant="outlined"
          size="small"
        />

        <TextField
                label="Email"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                />
            <br/>
            <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          size="Normal"
       variant="outlined"
        />
        <br/>
        <Button variant="contained" color="primary">
  Send Message  
</Button>
            
                </form>   
            </div>
        </div>
    )
}
