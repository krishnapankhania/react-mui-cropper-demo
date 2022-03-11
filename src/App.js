import * as React from "react";
import Box from "@mui/material/Box";
import Upload from "./Upload";
import Popup from "./Popup";
export default function App() {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState(
    "https://images.unsplash.com/photo-1612232134966-a9b076b9fbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  );

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Box my={2}>
          <img src={image} alt="cropped" height={400} />
        </Box>

        <Upload
          getUploadedFile={(image) => {
            setOpen(true);
            setImage(image);
          }}
        />
        <Popup
          open={open}
          handleClose={handleClose}
          image={image}
          getCroppedFile={(image) => {
            setImage(image);
            handleClose();
          }}
        />
      </Box>
    </div>
  );
}
