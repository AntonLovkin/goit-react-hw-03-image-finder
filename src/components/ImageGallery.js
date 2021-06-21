import React from "react";
import ImageGalleryItem from '../components/ImageGalleryItem'

const ImageGallery = ({pictures}) => {
    return (
        <ul className="ImageGallery">
          {pictures.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              key={id}    
              src={webformatURL}
              alt={tags}
              onClick={()=> {this.handleItemClick(largeImageURL, tags )}}/>            
          ))}
        </ul>    
       
    )
}

export default ImageGallery;