import React, { Component } from 'react';
// import Container from './Conatainer/Container';
import Form from '../components/Searchbar/SearchBar';
import fetchApi from '../components/ServiceApi/API';
import ImgGallery from '../components/ImageGallery/ImageGallery';
import BtnLoad from '../Load/BtnLoadMore';
import Modal from '../Modal/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppStyles } from './AppStyle.styled';




class App extends Component { 

  state = {
    page: 1,
    gallery: [],
    searchQuery: '',
    showImg: false,
    modalImg:''
  };


  onToggleShowImg = () => {
    this.setState(({ showImg }) => ({
      showImg: !showImg,
    })
    );
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

  //===Метод плавной прокрутки===//
   handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  fethImg = async () => {
    const { searchQuery, page } = this.state;

    try {
      const img = await fetchApi(searchQuery, page);
      this.setState(({ gallery }) => {
        return { gallery: [...gallery, ...img.hits] }
      });
    } catch (error) {
      console.error(error)
    };
  };

  onHandleClick(img) { 
    this.setState({ modalImg: img })
    this.onToggleShowImg()
  } 

  onHandleSubmit = (query) => {
    this.setState({
      searchQuery: query,
      page:1,
      gallery: []
    });
  };

  render() { 
    const { gallery, page,showImg,modalImg } = this.state;
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
          <ImgGallery img={gallery} />
        )}
        {gallery.length > 0 && gallery.length / page === 15 && (
          <BtnLoad onClickLoadMore={loadImg} />
        )}
        {showImg && <Modal large={modalImg} onClick={this.onToggleShowImg}/>}
      </AppStyles>
    );
  }
}

export default App;
  