import React, {Components} from 'react'

class ImgItem extends Components { 

  state = {}
  
  render() { 
    const { img } = this.props;
    return (
    <li className=''>
      <img src={img} alt="" />
    </li>
  );
  }
  
}

export default ImgItem;