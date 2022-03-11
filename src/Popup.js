import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CropperDemo from "./Cropper";

export default function Popup({ open, image, handleClose, getCroppedFile }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Crop Image</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <CropperDemo
              handleClose={handleClose}
              src={image}
              getCroppedFile={getCroppedFile}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
