import { Grid } from '@material-ui/core'
import {Typography } from '@mui/material'
import { makeStyles } from '@material-ui/styles'
import React from 'react'


function About() {
    const classes=useStyles()
  return (
    <>
     <Grid container className={classes.root}>
     <Grid item xs={6} className={classes.root}>
     <Typography variant="h5" color="GrayText">
     About Us
     </Typography>
     </Grid>
     <Grid container className={classes.root}>
     <Grid item xs={6} >
     <Typography variant="h3" color="black" textAlign="center">
     We're on a mission to make
building UIs more accessible
     </Typography>
     </Grid>
     </Grid>
     <Grid container className={classes.root}>
     <Grid item xs={12} sm={12} md={8} lg={6}>
     <Typography variant="h6" color="black" textAlign="center">
     Our mission is to empower anyone to build UIs, faster. We're reducing the entry barrier, making design skills accessible.
     </Typography>
     
     </Grid>
     </Grid>
     </Grid>    
    </>
  )
}
const useStyles = makeStyles(theme=>({
root:{
    backgroundColor:'smokeWhite',
    color:'gray',
    display:'flex',
    justifyContent:'center',
    marginTop:'20px',
    marginBottom:'20px',
},
}))
export default About