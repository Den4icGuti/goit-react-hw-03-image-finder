import React, { Component } from 'react';
import imgItem from 'components/ImageGalleryItem/ImageGallItem';


class ImageGallery extends Component { 
  state = {
    gallery: [],
    status: 'idle',
    error: null,
    page:1
  }

  //===Метод обновления, componentDidUpdate, проверяем предыдущие состояние компонетна, и текущее===//
  componentDidUpdate(prevProps, prevState) { 
    const prev = prevProps.gallery;
    const next = this.props.gallery;

    this.setState({status: 'panding'})
  }

  render() { 
    return (
      <ul className=''>
        <imgItem/>
      </ul>
    );
  }
}

export default ImageGallery;