// import propTypes from "prop-types";
import { ImgGallery } from "./ImgGallery.styled";
import ItemGallery from '../ImageGalleryItem/ImageGallItem'


function GalleryList({img,onImgClick}) { 
  return (
    <ImgGallery>
      {img.map(({ id, webformatURL, largeImageURL }) => (
     <ItemGallery
          key={id}
          src={webformatURL}
          modalImg={largeImageURL}
          onImgClick={onImgClick}
        />
      ))}
    </ImgGallery>
  );
}

export default GalleryList;

