import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState,useEffect } from 'react';


const defaultTheme = createTheme();

export default function SignIn({setOpen, setData,handleClose}) {
  let initialValue;
  if (localStorage.getItem("Books") === null) {
    initialValue = [];
  } else {
    initialValue = JSON.parse(localStorage.getItem("Books"));
  }
  const [value, setValue] = useState(initialValue);
  // const [selectedImage, setSelectedImage] = useState(null)
  const [book, setBook] = useState();
  const handleChange =(e)=>{
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  }
  console.log(book)
  // const handleFileChange = (event) => {
  //   setSelectedImage(event.target.files[0]);
  // };
  // console.log(selectedImage);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Calculate the new book ID
    const newBookId = value.length === 0 ? 1 : value[value.length - 1].b_id + 1;
  
    // Create new book details
    const newBookDetails = {
      b_id: newBookId,
      ...book
    };
  
    // Update the state with the new book
    const updatedValue = [...value, newBookDetails];
    setValue(updatedValue);
    setData(updatedValue);
    console.log(updatedValue);
    // Update local storage
    localStorage.setItem("Books", JSON.stringify(updatedValue));
    // Close the modal or dialog
    await setOpen(false);
  };
  
  console.log(value);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxHeight: '65vh',
            minHeight: '30vh',
            overflow: 'auto',
            
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5" style={{fontWeight:'bolder'}}>
            Inserting form
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 0 }} encType='multipart/form-data'>
      <TextField
        onChange={handleChange}
        margin="normal"
        required
        fullWidth
        id="name"
        label="Book Title"
        name="title"
        autoComplete="text"
        autoFocus={true}
      />
      <TextField
        onChange={handleChange}
        margin="normal"
        required
        fullWidth
        name="author"
        label="Author Name"
        type="text"
        autoComplete="text"
      />
      <TextField
        onChange={handleChange}
        margin="normal"
        required
        fullWidth
        name="year"
        label="Year of Publishing"
        type="number"
        autoComplete="number"
      />
      <TextField
        onChange={handleChange}
        margin="normal"
        required
        fullWidth
        name="mrp"
        label="Book Price"
        type="number"
        autoComplete="number"
      />
      {/* <small>Profile picture</small>
      <TextField
        onChange={handleFileChange}
        margin="normal"
        required
        fullWidth
        name="image"
        type="file"
        autoComplete="off"
      /> */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Insert
      </Button>
      
    </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}