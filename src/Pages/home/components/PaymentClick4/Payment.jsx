import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';





const Payment = () => {
  return (
    <Container textAlign="center">
        <Box marginTop={10} display={"flex"} justifyContent="center" mb={5}>
            <Grid container display="flex" justifyContent="center" textAlign="center">
                <Grid item lg={4} md={5} sm={12} xs={12}  textAlign="center">
                        <Typography variant='h4' className='head'>
                        Quick and easy                   
                        payments with just 
                        few clicks
              </Typography>
                </Grid>
                <Grid item lg={5} md={12} sm={12} xs={12} className='Spacecenter' mt={3} mb={4}>
                   <Typography textAlign="center">
                            It is a long eastbalished fact that a reader will belie
                            <br/>
                            distracted by the readable content of a page when looking at its layout
                        </Typography>
                  </Grid>
                <Grid item lg={2} md={4} sm={12} xs={12} className='Spacecenter' textAlign="center" mb={4}>
                        <Button variant="outlined" ><a href='/' className='a-m'>Get Started</a></Button>     
                </Grid>
            </Grid>
        </Box>
    </Container>
  )
}

export default Payment
