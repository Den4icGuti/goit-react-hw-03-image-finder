// import propTypes from "prop-types";
import { ImgGallery } from "./ImgGallery.styled";
import ItemGallery from '../ImageGalleryItem/ImageGallItem'


function GalleryList({img}) { 
  return (
    <ImgGallery>
      {img.map(({ id, webformatURL, largeImageURL }) => (
     
      <ItemGallery
          key={id}
          src={webformatURL}
        
      />
    ))}
  </ImgGallery>
  )
  
}

export default GalleryList;

