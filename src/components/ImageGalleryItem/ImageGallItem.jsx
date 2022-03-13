import React, {Component} from 'react'

class ImgItem extends Component { 

  render() { 

    const { img } = this.props;
    return (
     
      <li>
        <img src={img.largeImageURL} alt=''/>
      </li>
    )
  }
  
}

export default ImgItem;