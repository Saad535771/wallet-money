import { Button, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Right1 from 'E:/Projects/material ui/wallet/src/image/iPhone 13 Pro Max - 3.png'
import Right2 from 'E:/Projects/material ui/wallet/src/image/iPhone 13 Pro Max - 4.png'
const Hero = () => {
    const classes = useStyles()
    return (
        <Container className={classes.alignment}>
            <Box marginTop={0}>
                <Grid container >
                    <Grid item lg={5} md={5} sm={12} xs={12} className={classes.alignment}>
                            <Typography variant='h2' mb={5} mt={4}>
                                Manage your
                                money more
                                quickly
                            </Typography>
                            <Typography mb={5}>
                                it is a long establish fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                            </Typography>
                        <Box marginTop={4} className={classes.alignment}>
                            <Grid container spacing={5} mb={5}>
                                <Grid item lg={5} md={5} sm={5} xs={12} ml={2}>
                                        <Button variant='contained'>Get Started</Button>
                                   </Grid>
                                <Grid item lg={5} md={5} sm={5} xs={12} ml={2} >
                                        <Button variant='outlined'>Explore Now</Button>  
                                </Grid>
                            </Grid>

                        </Box>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Grid container>
                                <Grid item lg={6} md={6} sm={6} xs={12}  marginTop={6}  className="box-img-1">
                                 
                                        <img src={Right1} width={250} height={450} alt="Saad" />
                                    
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12} textAlign="center" mt={5}>
                                        <img src={Right2} width={250} height={450} alt="Saad" />
                                </Grid>
                            </Grid>
                      
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

const useStyles = makeStyles(theme=>({
    alignment:{
     
        justifyContent:'center',
        flexDirection:'column',
    },
}))

export default Hero
