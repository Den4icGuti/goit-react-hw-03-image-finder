import React, { Component } from 'react';
// import Container from './Conatainer/Container';
import Form from '../components/Searchbar/SearchBar';
import fetchApi from '../components/ServiceApi/API';
import { ImgGallery } from 'components/ImageGallery/ImgGallery.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppStyles,Normalize } from './AppStyle.styled';




class App extends Component { 

  state = {
    page: 1,
    gallery:[]
  }


  //===Обновляем состояние через метод зизненного цикла componentDidUpdate===//
  componentDidUpdate(prevProps, {searchQuery,page}) { 
    //  const { searchQuery, page } = this.state;

    if (searchQuery !== this.state.searchQuery || page !== this.state.page) { 
     
      return fetchApi(searchQuery, page);
    }
  }

  onHandleLoadMoreImg = prevState => { 
    
    this.setState({page: prevState.page + 1})
  }

  fethImg = async () => { 
    const { searchQuery, page } = this.state;

    try {
      const res = await fetchApi(searchQuery, page);
      
      this.setState(({ gallery }) => {
        return {gallery: [gallery, ...res.hits] }
      })

    } catch (error) { 
        console.error(error)
    }
  }

  onHandleSubmit = searchQuery => { 
    this.setState({searchQuery})
  }

  render() { 
    const { gallery} = this.state;
    return (
      
        <AppStyles>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            theme='dark'
        />
        <Normalize>
          <Form onSubmit={this.onHandleSubmit} />
          {gallery.length > 0 && (
            <ImgGallery img={gallery}/>
          )}
           
          
        </Normalize>
         
      </AppStyles>

     
      
    );
  }
}

export default App;
  