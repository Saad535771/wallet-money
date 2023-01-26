import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Box, Grid, Typography } from '@mui/material'
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SecurityIcon from '@mui/icons-material/Security';
import TelegramIcon from '@mui/icons-material/Telegram';
import React from 'react'

function ChartStable() {
  const classes = useStyles()
  return (
    <div display="flex" justifyContent="center">
    <Grid container className={classes.spaceTop}>
    <Grid item lg={4} md={5} sm={12} xs={12} mt={5}>
    <Paper  className={classes.paperMainBg} >
    <Grid container className={classes.alignment}>
    <Grid item lg={3} md={5} sm={12} xs={12}>
    <Paper className={classes.graphBox} >
    <EqualizerIcon className={classes.IconSize}/>
    </Paper>
    </Grid>
    <Grid item xs={12} marginTop="10px">
    <Typography variant="h5">Stable Chart</Typography>
    </Grid>
    <Grid item xs={10}>
    <Typography variant="caption" className={classes.textGray}>
    contrary to popular belief, lorem Ipsum is not simply random text.It has  roots in a piece of classical Latin litrature from 45 BC,making it over 2000 years.
    </Typography>
    </Grid>
    </Grid>
    </Paper>
    </Grid>
    <Grid item lg={3} md={5} sm={12} xs={12} mt={5}>
    <Box >
    <Grid container>
    <Grid item lg={3} md={5} sm={12} xs={12}>
    <Box className={classes.SecurityBox} >
    <SecurityIcon className={classes.IconSize}/>
    </Box>
    </Grid>
    <Grid item xs={12}>
    <Typography variant="h5">Security Guard</Typography>
    </Grid>
    <Grid item xs={10}>
    <Typography variant="caption" className={classes.textGray}>
    contrary to popular belief, lorem Ipsum is not simply random text.It has  roots in a piece of classical Latin litrature from 45 BC,making it over 2000 years.
    </Typography>
    </Grid>
    </Grid>
    </Box>
    </Grid>
    <Grid item lg={3} md={5} sm={12} xs={12} mt={5}>
    <Box >
    <Grid container>    
    <Grid itemlg={3} md={5} sm={12} xs={12}>
    <Box className={classes.EasyCommunication} >
    <TelegramIcon className={classes.IconSize}/>
    </Box>
    </Grid>
    <Grid item xs={12} >
    <Typography variant="h5">Easy Communication</Typography>
    </Grid>
    <Grid item xs={10}>
    <Typography variant="caption" className={classes.textGray}>
    contrary to popular belief, lorem Ipsum is not simply random text.It has  roots in a piece of classical Latin litrature from 45 BC,making it over 2000 years.
    </Typography>
    </Grid>
    </Grid>
    </Box>
    </Grid>
    </Grid>
    </div>
  )
}
const useStyles = makeStyles(theme => ({
  root:{
    marginTop:'50px',
    paddingBottom:'50px',
    display:'flex',
    justifyContent:'spaceEvenly',
    textAlign:'center',
  },
  graphBox:{
    borderRadius:'25%',
    boxShadow:'0px,0px,12px,0px',
    width:'70px',
    height:'70px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'red',
    background:'#d4bdf9',
    fontSize:'12px',
  },
  SecurityBox:{
    borderRadius:'25%',
    boxShadow:'0px,0px,12px,0px',
    width:'70px',
    height:'70px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'seagreen',
    background:'#acf7ea',
    fontSize:'12px',
  },
  EasyCommunication:{
    background:'#a7b0f2',
    borderRadius:'25%',
    boxShadow:'0px,0px,12px,0px',
    width:'70px',
    height:'70px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'skyblue',
    fontSize:'12px',
  },
  IconSize:{
    height:'80%',
    width:'75%',
  },
  paperMainBg:{
    background:'#f9f5f9',
    borderRadius:'5%',
    marginRight:'10px',
    padding:'15px',
    width:'60%',
    hight:'auto',

    
  },
  spaceTop:{
    marginTop:'30px',
    marginBottom:'10px',
    display:'flex',
    justifyContent:'center',
  },
  textGray:{
    color:'gray',
  },
  
}))
export default ChartStable