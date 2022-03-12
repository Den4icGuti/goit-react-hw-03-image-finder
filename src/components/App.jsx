import React, { Component } from 'react';
import Container from './Conatainer/Container';
import Form from './Searchbar/SearchBar'


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
         <Form onSubmit={this.onHandleSubmit}/>
      </Container>
     
    )
  }
}

export default App;
  