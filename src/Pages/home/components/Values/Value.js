import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react'
import { makeStyles } from '@material-ui/styles';
const Value = () => {
    const classes = useStyles()
  return (
    <Container>
        <Box marginTop={10} display={"flex"} justifyContent="center">
            <Grid container>
                <Grid item lg={4} md={4} sm={12} xs={12} className={classes.alignment} mt={5}>
                    <Box>
                        <Typography variant='h4' className='head'>Our Value</Typography>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} className={classes.alignment} mt={5}>
                    <Box className={classes.alignment}>
                        <Typography className={classes.alignment}>
                            It is a long eastbalished fact that a reader will belie
                            <br/>
                            distracted by the readable content of a page when looking at its layout
                        </Typography>
                    </Box>
                </Grid>
                <Grid item lg={2} md={2} sm={12} xs={12} className={classes.alignment} mt={5}>
                    <Box>
                        <Button variant="outlined"><a href='www.google.com' className='a-m'>Get Started</a></Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Container>
  )
}
const useStyles = makeStyles(theme=>({
    alignment:{
        display:'flex',
        justifyContent:'center',
    },
}))

export default Value
