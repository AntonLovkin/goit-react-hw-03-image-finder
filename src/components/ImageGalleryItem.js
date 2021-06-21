import React from "react";

const ImageGalleryItem = ({key, src, alt, onClick}) => {
    return (
        <li key={key} className="ImageGalleryItem">
              <img className="ImageGalleryItem-image"
                src={src}
                alt={alt}
                onClick={onClick} />
            </li>
    )
}

export default ImageGalleryItem;