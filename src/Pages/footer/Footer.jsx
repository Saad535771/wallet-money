import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import logo from 'E:/Projects/material ui/wallet/src/image/4509130.svg'
import { FacebookOutlined } from '@mui/icons-material'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom'
function Footer() {
  const classes = useStyles()
  return (
    <div spacing={2}>
    <Grid container className={classes.alignCenter}>
    <Grid item lg={6} md={7} sm={12} xs={12}>
    <hr/>
    </Grid>
    </Grid>
    <Grid container  >
    <Grid item lg={3} md={3} sm={12} xs={12} textAlign="center" mt={3} mb={3}>
    <img src={logo} width={100} alt="this is a logo"/>
    </Grid>
    <Grid item lg={2} md={2} sm={6} xs={12} textAlign="center" mt={3} mb={3}>
    <Typography variant="h5" ><span className={classes.text}>About</span></Typography>
    <Typography >
    <Link  to ="About" className={classes.textGray}>About Us</Link>
    </Typography>
    <Typography>
    <Link  to ="/" className={classes.textGray}>Features Us</Link>
    </Typography>
    <Typography className={classes.textGray}>News & Blog</Typography>
    </Grid>
    <Grid item lg={2} md={2} sm={6} xs={12} textAlign="center" mt={3} mb={3}>
    <Typography variant="h5" ><span className={classes.text}>Company</span></Typography>
    <Typography className={classes.textGray}>Capital</Typography>
    <Typography className={classes.textGray}>Security</Typography>
    <Typography className={classes.textGray}>WhyEatly</Typography>
    </Grid>
    <Grid item lg={2} md={2} sm={6} xs={12} textAlign="center" mt={3} mb={3}>
    <Typography variant="h5" ><span className={classes.text}>Support</span></Typography>
    <Typography className={classes.textGray}>FQs</Typography>
    <Typography >
    <Link  to ="Contact" className={classes.textGray}>Contact Us</Link>
    </Typography>
    <Typography className={classes.textGray}>Support Center</Typography>
    </Grid>
    <Grid item lg={3} md={3} sm={12} xs={12} textAlign="center" mt={3} mb={3}>
    <span><FacebookOutlined className={classes.iconBg}/></span>
    <span><InstagramIcon className={classes.iconBg}/></span>
    <span><YouTubeIcon className={classes.iconBg}/></span>
    <span><TwitterIcon className={classes.iconBg}/></span>
    </Grid>
    </Grid>
    </div>
  )
}
const useStyles=makeStyles(theme=>({
  root:{
    marginTop:'50px',
    paddingBottom:'50px',
    
  },
  lineBottom:{
    border:'0px',
    borderBottom:'1px',
    borderBottomColor:'gray',
  },
  alignCenter:{
    display:'flex',
    justifyContent:'center',
  },
  iconBg:{
    borderRadius:'50px',
    padding:'3px',
    width:'20%',
    height:'30%',
  },
  alignStart:{
    display:'flex',
    justifyContent:'start',
    paddingLeft:'15px',
  },
  text:{
    color:'#6d549f',
    fontSize:'larger',
    marginTop:'10px',
  },
  textGray:{
    color:'#808080',
    fontSize:'large',
    marginTop:'10px',
    textDecorationLine:'none',
    textDecorationColor:'none',
  },
  spaceEvenly:{
    display:'flex',
    justifyContent:'spaceEvenly',
  },


}))
export default Footer