import React, { useState } from 'react';
import Navuser from './Navuser';
import { Button, TextField, Typography } from '@mui/material';

const Profileupdate = () => {
  const heading = { fontSize: "2rem", fontWeight: "600" };
  const paperStyle = { padding: "2rem", margin: "50px auto", borderRadius: "1rem", boxShadow: "10px 10px" };

  // State to track if fields are editable
  const [isEditable, setIsEditable] = useState(false);

  const toggleEdit = () => {
    setIsEditable(prev => !prev); // Toggle the editable state
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Navuser />
      <br /><br /><br /><br />
      <Typography style={heading}>Profile</Typography>
      <br />
      <form>
        <TextField 
          type="text" 
          label="Mobile Number or Email" 
          variant="filled" 
          sx={{ width: "300px" }} 
          disabled={!isEditable} // Control the disabled state
        /> 
        <br /> <br />
        <TextField 
          type="text" 
          label="Firstname" 
          variant="filled" 
          sx={{ width: "300px" }} 
          disabled={!isEditable} 
        /> 
        <br /> <br />
        <TextField 
          type="text" 
          label="Lastname" 
          variant="filled" 
          sx={{ width: "300px" }} 
          disabled={!isEditable} 
        /> 
        <br /> <br />
        <TextField 
          type="password" 
          label="Password" 
          variant="filled" 
          sx={{ width: "300px" }} 
          disabled={!isEditable} 
        /> 
        <br /><br />
        
        <Button 
          variant="contained" 
          onClick={toggleEdit} // Toggle edit mode
          sx={{ marginTop: "1rem" }}
        >
          {isEditable ? 'Save' : 'Edit'}
        </Button>
      </form>
    </div>
  );
};

export default Profileupdate;

