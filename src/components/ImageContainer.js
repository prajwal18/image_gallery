import { useState } from "react";
import { Typography, ImageList, Dialog, DialogContent, DialogActions } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ImageCard from "./ImageCard";


const initialState={
    open: false,
    image: ""
}
const ImageContainer = ({imageData}) => {
  const [dialogue, setDialogue] = useState(initialState);

  const openImage = (image) => {
    setDialogue({...dialogue, open: true, image: image})
  }
  return (
    <div style={{margin: "20px 0", padding:"0 20px"}}>
        {
            imageData.length === 0?
            <Typography variant="subtitle1" component="p" style={{margin: "20px"}}>
                No images to display
            </Typography>:
            <>
                <ImageList cols={3} rowHeight={200}>
                    {
                        imageData.map(data => (<ImageCard key={data.id} data={data} openImage={openImage} />))
                    }
                </ImageList>

                <Dialog
                    open={dialogue.open}
                    onClose={() => setDialogue({...dialogue, open: false})}
                    maxWidth="md"
                >
                    <DialogContent>
                        <img
                            className="dialog-img"
                            src={dialogue.image}
                            alt="Nice Pic"
                            loading="lazy"
                        />
                    </DialogContent>
                    <DialogActions>
                        <CloseIcon className="close-icon" onClick={() => setDialogue({...dialogue, open: false})} />
                    </DialogActions>
                </Dialog>
            </>
        }
    </div>
  )
}

export default ImageContainer;