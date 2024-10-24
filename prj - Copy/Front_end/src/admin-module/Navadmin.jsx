import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle'; // Admin user icon
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded'; //  icon
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { Link } from 'react-router-dom';
// import WorkIcon from '@mui/icons-material/Work';
// import LogoutIcon from '@mui/icons-material/Logout';
import Logout from '@mui/icons-material/Logout';

// Custom theme with black and white color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: '#505050', // Black sidebar background
    },
    text: {
      primary: '#ffffff', // White text for sidebar items
    },
  },
});

const Navadmin = () => {
  return (
    <ThemeProvider theme={theme}>
    <Drawer variant="permanent" sx={{width: 250,flexShrink: 0,'& .MuiDrawer-paper': {width: 220,backgroundColor: '#505050', // Black background
          color: '#ffffff', // White text
        },
      }}>
      <div>
        {/* Admin Icon on top */}
        <IconButton sx={{ justifyItems: 'center', marginTop: 2 }}>
          <AccountCircle sx={{ fontSize: 60, color: '#00FFFF' }} /></IconButton> {/* Admin user icon */}
        
        {/* <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 1 }}>
          Admin Panel
        </Typography> */}

        {/* Sidebar Navigation Buttons */}
        <List>
          {/* Admin Dashboard Button */}
          <Link to="/Adminhome" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem button>
              <ListItemIcon>
                <AdminPanelSettingsRoundedIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Admin Home" />
            </ListItem>
          </Link>

          {/* Manage Jobs Button */}
          <Link to="/Managejobs" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem button>
              <ListItemIcon>
                <TuneRoundedIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Manage Jobs" />
            </ListItem>
          </Link>

          <Link to="/Viewapplications" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem button>
              <ListItemIcon>
                <TuneRoundedIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="View Applications" />
            </ListItem>
          </Link>


          {/* <Link to="/admin/jobs/671410800994ebbf2b7ef2d3/applicants">
            <NavButton variant="text">View Applicants</Button></Link>
            <Link to="/">
            </Link> */}

           {/* logout */}

         <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem button>
              <ListItemIcon>
                <Logout sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItem>
            </Link>
            </List>
            

{/* { */}
          {/* // <Link to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}> */}
          {/* //   <ListItem button> */}
          {/* //     <ListItemIcon> */}
          {/* //       <WorkIcon sx={{ color: 'white' }} /> */}
          {/* //     </ListItemIcon> */}
          {/* //     <ListItemText primary="Logout" /> */}
          {/* //   </ListItem> */}
          {/* // </Link>  */}
        {/* // </List> */}
      </div>
    </Drawer>
  </ThemeProvider>
);
};

  
export default Navadmin