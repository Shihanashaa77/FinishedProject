import React from 'react'
import { AppBar, Button, Toolbar,Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <AppBar>
                <Toolbar >
                    <Typography variant='h6' align="left" sx={{flexGrow:3}}></Typography>
                    {/* <Link to='/'>
                        <Button variant='contained'>Home</Button>
                    </Link>&nbsp; */}
                    <Link to='/Login'>
                        <Button variant='contained' color="error" >Login</Button>
                    </Link>&nbsp;
                    <Link to='/Signup'>
                        <Button variant='contained' color="error" >Sign Up</Button>
                    </Link>
                </Toolbar>
            </AppBar>
          </div>
  )
}

export default Nav
