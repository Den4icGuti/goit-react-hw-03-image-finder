 import PropTypes from "prop-types";

import { Item,ListItemImg } from './ImgItem.styled';

function imgItem({src,onImgClick,modalImg}) { 
  return (
    <Item onClick={()=> onImgClick(modalImg)}>
      <ListItemImg src={src} alt="" />
    </Item>
  );
  
}

 imgItem.propTypes = {
  src:PropTypes.string.isRequired
}

export default imgItem;