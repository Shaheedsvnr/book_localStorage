import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";

const defaultTheme = createTheme();

export default function SignIn({ data, setData, c, setC, i, setOpen }) {
  console.log(i);
  const [updatedBook, setUpdatedBook] = useState(i);
  const [index, setIndex] = useState("");
  const [on, setOn] = useState(true);

  // const [selectedImage, setSelectedImage] = useState(null)
  const handleChange = (e) => {
    setUpdatedBook({
      ...updatedBook,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    const index = data.findIndex((e) => e.b_id == i.b_id);
    setIndex(index);
  });
  // const handleFileChange = (event) => {
  //   setSelectedImage(event.target.files[0]);
  // };
  console.log(updatedBook);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedData = [...data];
    updatedData.splice(index, 1, updatedBook);
    console.log(updatedData);
    setData(updatedData);
    localStorage.setItem("Books", JSON.stringify(updatedData));
    await setOpen(false);
  };
  const changeState = (e) => {
    e.preventDefault();
    setOn((prev)=>!prev);
  };
  const Close = (e) => {
    e.preventDefault();
    setOpen((prev)=>!prev);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxHeight: "65vh",
            minHeight: "30vh",
            overflow: "auto",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}

          {on === true ? (
            <Typography
              component="h1"
              variant="h5"
              style={{ fontWeight: "bolder" }}
            >
              Book Details
            </Typography>
          ) : (
            <Typography
              component="h1"
              variant="h5"
              style={{ fontWeight: "bolder" }}
            >
              Update Form
            </Typography>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 0 }}
            encType="multipart/form-data"
          >
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Book Title"
              name="title"
              value={updatedBook?.title}
              autoComplete="text"
              disabled={on}
              autoFocus
            />
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              name="author"
              value={updatedBook?.author}
              label="Author Name"
              type="text"
              autoComplete="text"
              disabled={on}
            />
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              value={updatedBook?.year}
              name="year"
              label="Year of Publishing"
              type="number"
              autoComplete="number"
              disabled={on}
            />
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              name="mrp"
              value={updatedBook?.mrp}
              label="Book Price"
              type="number"
              autoComplete="number"
              disabled={on}
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
        disabled={on}
        
      /> */}
            {on === true ? (
              <>
              <Button
                type="button"
                fullWidth
                color="primary"
                onClick={changeState}
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Edit
              </Button>
              <Button
                type="button"
                fullWidth
                color="error"
                variant="outlined"
                onClick={Close}
              >
                Close
              </Button></>
            ) : (
              <>
                <Button
                type="submit"
                fullWidth
                color="success"
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Update
              </Button>
              <Button
                type="submit"
                fullWidth
                color="error"
                variant="outlined"
                onClick={changeState}

              >
                Cancel
              </Button>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
