import { ImageListItem } from "@mui/material";
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const ImageCard = ({data, openImage}) => {
    return (
        <ImageListItem className="image-item">
            <img
                src={`${data.largeImageURL}?h=200&fit=crop&auto=format`}
                alt={`${data.user}`}
                loading="lazy"
            />
            <div className="image-desc">
                <div>
                    <a href={data.pageURL} rel="noreferrer" target="_blank">
                        Photo by: <span className="capitalize">{data.user}</span>
                    </a>
                    <p>
                        Tags: {data.tags.length > 25? data.tags.substring(0, 25) + "...": data.tags}
                    </p>
                </div>
                <ZoomInIcon className="zoom-icon" onClick={() => openImage(data.largeImageURL)}/>
            </div>
        </ImageListItem>
    )
}

export default ImageCard;