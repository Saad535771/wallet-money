
import React from 'react'
import logo from 'E:/Projects/material ui/wallet/src/image/4509130.svg'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

function Header() {
    const classes=useStyles()
  return (
    <>
    <div className={classes.root}></div>
     <nav class="navbar navbar-expand-md d-flex justify-content-space-evenly navbar-light ">
      <a class="navbar-brand text-center" href="/"><img src={logo} width={50} alt="this is a logo" textAlign="start"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon  "></span>
  </button>
  <div class="collapse navbar-collapse text-align-center" id="navbarSupportedContent">
  <div class="container">
    <div class="col-12 navbar-nav d-flex justify-content-end">
      <li class="nav-item active mr-5" >
        <Link to ="/" class="nav-link text-dark text-center"><span>Features</span></Link>
      </li>
      <li class="nav-item mr-5">
        <Link to="Service" class="nav-link text-dark text-center ">Services</Link>
         </li>
         <li class="nav-item mr-5">
        <Link to ="/Contact" class="nav-link text-dark text-center" >Contact Us</Link>
         </li>
         <li class="nav-item mr-5">
        <Link to ="/About" class="nav-link text-dark text-center" >About</Link>
        </li>
        <li class="nav-link text-dark text-center">
        <Button varian="contained" size='small' className={classes.btnLogin}>
        <Link to ="/Login"  className={classes.linkColor}>
        Log in
        </Link>
    </Button>
        </li>
         </div>
         </div>
         </div>
</nav>

    </>
  )
}
const useStyles = makeStyles(theme=>({
    root:{
    display:'flex',
    justifyContent:'spaceEvenly',
    },
    alignment:{
      display:'flex',
      justifyContent:'spaceBetween',
    },
    alignmentStart:{
      display:'flex',
      justifyContent:'start',
    },
    padding:{
      paddingLeft:'12px',
      paddingRight:'15px',
      marginLeft:'50px',
      marginRight:'15px',
    },
    colorgray:{
     color:'gray',   
    },
    btnLogin:{
      color:'white',
      backgroundColor:'#1976d2',
    },
    linkColor:{
      color:'white',
      textDecoration:'none',
      textUnderline:'none',
      paddingRight:'2px',
      paddingLeft:'2px',
    },  
  }))
export default Header