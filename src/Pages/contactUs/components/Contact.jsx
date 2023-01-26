import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Contact() {
  const [name, setname] = useState("")
  const [lname, setlname] = useState("")
  const [email, setemail] = useState("")
  const [num, setnum] = useState("");
  const [message, setmessage] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === "") {
      alert.error("Name Is Required")
    } else if (email === "") {
      alert.error("Email Is Required")
    } else if (message === ""){
      alert.error("Password is Required")
    }
    else if (num === ""){
      alert.error("Phone Number is Required")
    }
    else {
      localStorage.setItem("name", name)
      localStorage.setItem("lastname", lname)
      localStorage.setItem("email", email)
      localStorage.setItem("message", message)
      localStorage.setItem("number", num)
      alert.success("User Saved!");
    }
  };

  return (
    <div className="contact" > 
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 15px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill  the form
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                  value={name}
                onChange={(e) => setname(e.target.value)}
                   placeholder="Enter first name"
                    label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                  value={lname}
                  onChange={(e) => setlname(e.target.value)}
                   placeholder="Enter last Name"
                    label="Last Name"
                     variant="outlined"
                     fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  value={email}
                onChange={(e) => setemail(e.target.value)}
                   type="email"
                    placeholder="Enter email"
                    label="Email" 
                    variant="outlined"
                     fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  type="number"
                  value="num"
                  onChange={(e)=> setnum(e.target.value)}
                    placeholder="Enter phone number"
                    label="Phone" 
                    variant="outlined"
                     fullWidth required />
                  </Grid>
                <Grid item xs={12}>
                  <TextField
                   label="Message"
                   type="text"
                   value={message}
                   onChange={(e) => setmessage(e.target.value)}
                   multiline
                   rows={5} 
                  placeholder="Type your message here" 
                  variant="outlined" 
                  fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button 
                  onClick={handleSubmit}
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  fullWidth>
                  Submit
                  </Button>
                  <Grid item xs={8} >
                  <Button variant="contained" color="secondary" size="small" height={100} width={100}>
                           <Link  to ="AddRecord">Check Record</Link>
                  </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Contact;