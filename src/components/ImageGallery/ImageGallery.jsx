import React, { Component } from 'react';
// import imgItem from 'components/ImageGalleryItem/ImageGallItem';
//  import fetchApi from 'components/Servise/Api';


class ImageGallery extends Component { 
  state = {
    gallery: [],
    status: 'idle',
    error: null,
    page:1
  }

  //===Метод обновления, componentDidUpdate, проверяем предыдущие состояние компонетна, и текущее===//
  componentDidUpdate(prevProps, prevState) { 
    const prev = prevProps.searchQuery;
    const next = this.props.searchQuery;
    const KEY_API = '25225743-62355b18deaf2a31912b18441';
    if (prev !== next) { 
      return fetch(`https://pixabay.com/api/?q=${next}&page=1&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => {
          if (res.ok) {
            return res.json()
          }
        }).then(gallery => this.setState({gallery}));

    }
    // this.setState({status: 'panding'})
  }

  render() { 
    
    return (
      <div>
        
        {this.state.gallery && <div>{this.state.gallery.user}</div>}
        <ul>
          <li>
            
          </li>
        </ul>
        
     </div>
    );
  }
}

export default ImageGallery;