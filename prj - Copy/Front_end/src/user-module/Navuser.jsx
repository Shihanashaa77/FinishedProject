import React from 'react'
import { AppBar, Button, Toolbar,Typography } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'

const Navuser = () => {
  return (
    <div>
      <AppBar>

                <Toolbar>
                     <Link to='/Userinfo'>
                <AccountCircle sx={{ fontSize: 60, color: '#F0FFFF' }} />
                </Link>
                    <Typography variant='h6' align="left" sx={{flexGrow:3}}></Typography>
                    <Link to='/Userhome'>
                        <Button variant='contained'>Home</Button>
                    </Link>&nbsp;
                    <Link to='/Browse'>
                        <Button variant='contained'>Browse Jobs</Button>
                    </Link>&nbsp;
                    <Link to='/Applied'>
                        <Button variant='contained'>Applied Jobs</Button>
                    </Link>
                </Toolbar>
            </AppBar>
    </div>
  )
}

export default Navuser

