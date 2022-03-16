// import propTypes from "prop-types";
import { ImgGallery } from "./ImgGallery.styled";
import ImgItem from "components/ImageGalleryItem/ImageGallItem";


export function GalleryList({ img }) { 
  <ImgGallery>
    {img.map((id, webformatURL,largeImageURL) => (
      <ImgItem
        key={id}
        src={webformatURL}
      />
    ))}
  </ImgGallery>
}