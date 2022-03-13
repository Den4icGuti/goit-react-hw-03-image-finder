import React, { Component } from 'react';
import Container from './Conatainer/Container';
import Form from './Searchbar/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class App extends Component { 

  state = {
    searchQuery:''
  }

  onHandleSubmit = searchQuery => { 
    this.setState({searchQuery})
  }

  render() { 
    return (
      <Container>
        <Form onSubmit={this.onHandleSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          theme='dark'
        />
      </Container>
     
    );
  }
}

export default App;
  