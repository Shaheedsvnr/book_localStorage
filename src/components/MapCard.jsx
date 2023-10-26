import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PanoramaOutlinedIcon from "@mui/icons-material/PanoramaOutlined";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import Modal from "@mui/material/Modal";
import Single from "./Single";
import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function MediaControlCard({
  data,
  setData,
  c,
  setC,
  i,
  id,
  title,
  author,
  year,
  mrp,
}) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const theme = useTheme();
  let style = {
    maxHeight: "80vh",
    minHeight: "70vh",
    maxWidth: "50vw",
    minWidth: "20vw",
    left: "50%",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    border: "2px solid black",
    padding: "50px",
    borderRadius: "2%",
    backgroundColor: "#f9ffff",
  };
  const [open, setOpen] = React.useState(false);
  const [on, setOn] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("Books")));
  }, [c]);
  // console.log(data);
  let initialFavs = JSON.parse(localStorage.getItem("favorite")) || [];
  const [favs, setFavs] = useState(initialFavs);
  const [checked, setChecked] = useState(false);
 console.log(favs,1)
  const RemoveFromFavourite = (i) => {
    setChecked((prev)=>!prev)
    console.log(i)
  }
  const AddToFavourite =async (i) => {
    setChecked(true);
    const id = i;
    const newfvId = favs.length === 0 ? 1 : favs[favs.length - 1].fv_id + 1;
    // Create new favorite details
    let newFavorite = {
      fv_id: newfvId,
      ...id,
    };
    
    // Update the state with the new favorite
    let updatedFavs = [...favs, newFavorite];
    console.log(updatedFavs,23456789)
    setFavs(updatedFavs);
    await localStorage.setItem("favorite", JSON.stringify(updatedFavs));

  };
  useEffect(() =>{
    localStorage.setItem("favorite", JSON.stringify(favs));
  },[favs])
  console.log(favs);



  const Delete = (id) => {
    console.log(id);
    const updatedData = data.filter((e) => e.b_id !== id);
    console.log(updatedData);
    setData(updatedData);
    setC(c + 1);
    localStorage.setItem("Books", JSON.stringify(updatedData));
  };
  const View = (i) => {
    console.log(i);
    setOpen(true);
  };

  return (
    <Card sx={{ display: "flex", marginTop: "10px", backgroundColor: "#fff" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "30vw",
          maxWidth: "50vw",
          overflow: "auto",
        }}
      >
        <div style={{ display: "flex" }}>
          <div className="w-100">
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                <span
                  style={{ textTransform: "capitalize", fontWeight: "bolder" }}
                >
                  {title}
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <span
                  style={{ textTransform: "capitalize", fontWeight: "bolder" }}
                >
                  {author}
                </span>
              </Typography>
            </CardContent>
          </div>
          <div className="">
            <CardContent sx={{ flex: "1 0 auto" }}>
              <div className="d-flex p-1">
                {/* <div className="w-100 mb-1">
                  <Typography component="div" variant="h5">
                    <span
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "bolder",
                      }}
                    >
                      <Tooltip
                        TransitionComponent={Zoom}
                        TransitionProps={{ timeout: 200 }}
                        title="Add to Favourite"
                        placement="top"
                        arrow
                      >{checked===true? (
                        <>
                          <FavoriteIcon onClick={() =>  RemoveFromFavourite(i)}
                          style={{ cursor: "hand" }} color="error"/>
                        </>
                      ):(
                        <>
                        <FavoriteBorderIcon onClick={() =>AddToFavourite(i)}
                          style={{ cursor: "hand" }} color="error"/>
                        </>
                      )}
                        
                        
                      </Tooltip>
                    </span>
                  </Typography>
                </div> */}
                <div className="w-100 mb-1">
                  <Typography component="div" variant="h5">
                    <span
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "bolder",
                      }}
                    >
                      <Tooltip
                        TransitionComponent={Zoom}
                        TransitionProps={{ timeout: 200 }}
                        title="Delete"
                        placement="top"
                        arrow
                      >
                        <DeleteOutlineIcon
                          style={{ cursor: "hand" }}
                          onClick={() => Delete(id)}
                          color="error"
                        />
                      </Tooltip>
                    </span>
                  </Typography>
                </div>
                <div className="m-2 mt-1">
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <span
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "bolder",
                      }}
                    >
                      <Tooltip
                        TransitionComponent={Zoom}
                        TransitionProps={{ timeout: 200 }}
                        title="View/Edit"
                        placement="top"
                        arrow
                      >
                        <PanoramaOutlinedIcon
                          color="secondary"
                          style={{ cursor: "hand" }}
                          onClick={() => View(i)}
                        />
                      </Tooltip>
                    </span>
                  </Typography>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Single
            setOpen={setOpen}
            data={data}
            setData={setData}
            c={c}
            setC={setC}
            i={i}
          />
        </Box>
      </Modal>
    </Card>
  );
}
