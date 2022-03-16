import PropTypes from "prop-types";

import { ListItem,ListItemImg } from './ImgItem.styled';

function imgItem({ src }) { 
  <ListItem>
    <ListItemImg src={src}/>
  </ListItem>
}

imgItem.propTypes = {
  src:PropTypes.string.isRequired
}

export default imgItem;