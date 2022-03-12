import React, { Component } from 'react';

class ImageGallery extends Component { 
  state = {
    gallery: [],
    status: 'idle',
    error: null,
    page:1
  }
}

export default ImageGallery;