import React, { Component } from 'react';
// import Container from './Conatainer/Container';
import Form from '../Searchbar/SearchBar';
import fetchApi from '../../ServiceApi/API';
import ImgGallery from '../ImageGallery/ImageGallery';
import BtnLoad from '../Load/BtnLoadMore';
import Modal from '../Modal/Modal';
import Load from '../Loader/Loading'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppStyles } from './AppStyle.styled';




class App extends Component { 

  state = {
    page: 1,
    gallery: [],
    searchQuery: '',
    showImg: false,
    modal: "",
    load: false,
  };

  //===Метод открытия изображения===//
  onToggle = () => {
    
    this.setState(({ showImg }) => ({
      showImg: !showImg,
    }));
  
  };
  
//===Обновляем состояние через метод зизненного цикла componentDidUpdate===//
  componentDidUpdate(prevProps, {searchQuery,page}) { 
    //  const { searchQuery, page } = this.state;
    
    if (searchQuery !== this.state.searchQuery || page !== this.state.page) { 
      
      return this.fethImg(searchQuery, page);
      }
    this.handleScroll()
  };

  //===Метод загрузки изображений===// 
  onHandleLoadMoreImg = () => {
    this.setState((prevState) => {
      return { page: prevState.page + 1 }
    });
  };

  //===Метод анимации загрузки===//
  onLoading = () => { 
    this.setState(({ load }) => ({
      load:!load
    }))
  }

  //===Метод плавной прокрутки===//
   handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  fethImg = async () => {
    const { searchQuery, page } = this.state;
    this.onLoading()

    try {
      const img = await fetchApi(searchQuery, page);
      this.setState(({ gallery }) => {
        return { gallery: [...gallery, ...img.hits] }
      });
    } catch (error) {
      console.error(error)
    } finally { 
     this.onLoading()
    }
  };

  onHandleClick = (img) => { 
    this.setState({ modal: img });
    this.onToggle()
  } 

  onHandleSubmit = (query) => {
    this.setState({
      searchQuery: query,
      page:1,
      gallery: []
    });
  };

  render() { 
    const { gallery, page,showImg,modal,load } = this.state;
    const loadImg = this.onHandleLoadMoreImg;
    const submit = this.onHandleSubmit;
  

   
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
      
        <Form onSubmit={submit} />
        {gallery.length > 0 && (
          <ImgGallery img={gallery} onImgClick={this.onHandleClick} />
        )}

        {load && <Load />}
        {showImg &&
          (<Modal large={modal} onClose={this.onToggle} />)}
        
        {gallery.length > 0 && gallery.length / page === 12 && (
          <BtnLoad onClickLoadMore={loadImg} />
        )}
        
      </AppStyles>
    );
  }
}

export default App;
  