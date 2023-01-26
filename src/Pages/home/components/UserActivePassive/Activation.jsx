import { makeStyles } from '@material-ui/styles'
import { Grid} from '@material-ui/core'
import { Typography } from '@mui/material'
import {  Container } from '@mui/system'
import React from 'react'

const Activation = () => {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <Grid container display={"flex"} justifyContent="center"  className={classes.root}>
                <Grid lg={2} md={2} sm={6} xs={6} >
                    <Typography variant={"h4"} textAlign={"center"}>125k +</Typography>
                    <Typography variatn={"h6"} textAlign={"center"}>User active</Typography>
                </Grid>
                <Grid lg={1} md={1} sm={1} xs={3} paddingTop={4}>
                    <Typography className='line'></Typography>
                </Grid>

                <Grid lg={2} md={2} sm={2} xs={6} padding={4} >
                    <Typography variant={"h4"} textAlign={"center"}>92k</Typography>
                    <Typography variant={"h6"} textAlign={"center"}>User passive</Typography>
                </Grid>

                <Grid lg={1} xs={3} padding={4}>
                    <Typography className='line'></Typography>
                </Grid>

                <Grid lg={2}  xs={6} padding={4} >
                    <Typography variant={"h4"} textAlign={"center"}>25%</Typography>
                    <Typography variant={"h6"} textAlign={"center"}>Increse in User</Typography>
                </Grid>

                <Grid lg={1}  xs={3} padding={4}>
                    <Typography className='line'></Typography>
                </Grid>

                <Grid lg={2}  xs={7} padding={4} >
                    <Typography variant={"h4"} textAlign={"center"}>12k</Typography>
                    <Typography variant={"h6"} textAlign={"center"}>Testimonial</Typography> 
                    </Grid>
               </Grid>
        </Container>
    )
}
const useStyles = makeStyles(theme=>({
    root:{
       marginTop:'30px', 
       marginBottom:'30px',
    },
}))
export default Activation
