// import PropTypes from "prop-types";

import { Item,ListItemImg } from './ImgItem.styled';

function imgItem({src}) { 
  return (
    <Item>
      <ListItemImg src={src} alt="" />
    </Item>
  );
  
}

// imgItem.propTypes = {
//   src:PropTypes.string.isRequired
// }

export default imgItem;