import { Grid, Typography } from '@material-ui/core'
import React from 'react'

function AddRecord() {
  return (
    <>
    <Grid container color="primary">
    <Grid item xs={12} className="d-flex align-items-center">
              <div className="ms-4">
                <h4>
                  Name :{" "} {localStorage.getItem("name")  ? localStorage.getItem("name") : "NA"}
                </h4>
                <h4>
                 Last Name :{" "} {localStorage.getItem("lastname")  ? localStorage.getItem("lname") : "NA"}
                </h4>
                 <Typography variant='h4'>
                  Email :{" "}
                  {localStorage.getItem("email") ? localStorage.getItem("email") : "NA"}
                </Typography>
                <Typography variant='h4'>
                  Phone Number :{" "}
                  {localStorage.getItem("num") ? localStorage.getItem("num")   : "NA"}
                </Typography>
              </div>
            </Grid>
            </Grid>
    </>
  )
}

export default AddRecord