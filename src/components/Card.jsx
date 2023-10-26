import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Form from './Form';
import { useState,useEffect } from 'react';
import MapCard from './MapCard'
export default function App() {
  let style = {
maxHeight: "80vh",
minHeight: 'maxContent',
maxWidth: "60vw",
minWidth: "30vw",
left:'50%',
position:'absolute',
top:'50%',
transform:'translate(-50%, -50%)',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
fontSize: 'calc(10px + 2vmin)',
border:'2px solid black',
padding:'50px',
borderRadius:'2%',
backgroundColor:'#ffffff4a',
overflow: 'auto'
}
  let style2 = {
maxHeight: "10vh",
minHeight: "10vh",
maxWidth: "30vw",
minWidth: "30vw",
border:'2px solid black',
borderRadius:'3%',
backgroundColor:'#d6d6d6',
marginTop:'10px',
padding:'5px',
}
let style3 = {
  maxHeight: "80vh",
  minHeight: "70vh",
  maxWidth: "50vw",
  minWidth: "20vw",
  left:'50%',
  position:'absolute',
  top:'50%',
  transform:'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  border:'2px solid black',
  padding:'50px',
  borderRadius:'2%',
  backgroundColor:'#f9ffff'
  }

  const [data,setData]=useState([]);
  const [c, setC] = useState(0);
  const [selectedBook, setSelectedBook] = useState('');
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("Books")));
}, [c])
console.log(data)
const elements = [1].map((i) => (
  <div style={style2} key={i}>
    {i}
  </div>
));
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
   <>
     <MDBCard style={style}>
        <h3><span style={{fontWeight:'bolder',fontSize:'40px'}}>Book List</span></h3>
      <MDBCardBody>
        <div style={{ maxHeight: '40vh', overflow: 'auto',maxWidth:'30vw',minWidth:'20px' }}>
        {data?.map((i) => (
          <MapCard data={data} setData={setData} c={c} setC={setC} i={i} id={i.b_id} title={i.title} author={i.author} year={i.year} mrp={i.mrp}/>
        ))}
        </div>
        <Button onClick={handleOpen} sx={{marginTop:'10px'}} variant="outlined" color="primary" fullWidth>
          Insert
        </Button>
      </MDBCardBody>
    </MDBCard>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MDBCard style={style3}>
          <MDBCardBody>
            <Form setOpen={setOpen} handleClose={handleClose} setData={setData}/>
          </MDBCardBody>
        </MDBCard>
    </Modal>
   </>
  );
}