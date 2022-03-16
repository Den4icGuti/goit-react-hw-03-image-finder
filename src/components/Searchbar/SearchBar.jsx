import React, { Component } from 'react';
import {
  SearchForm,
  SearchBar,
  SearchBtn,
  SearchInput,
 
} from './SearchBar.styled';

import {toast} from 'react-toastify'

class Form extends Component { 
  state = {
    searchQuery:'',
  }

  

  //===Метод контолирует состояния поля поиска===//
  onSearch = e => { 
    this.setState({searchQuery: e.currentTarget.value})
  }
  
  notify = () => toast('Enter the name')

  //===Отправляем форму===//
  onSubmitForm = e => { 
    e.preventDefault();
    const { searchQuery } = this.state;

    if (searchQuery.trim() === '') { 
      this.notify('Enter the name');
      return;
    }
    this.props.onSubmit(searchQuery);
    this.setState({searchQuery: ''})
  }

  render() { 
     const { searchQuery } = this.state;
    const search = this.onSearch;
    const submit = this.onSubmitForm;
    return (
    
      <SearchBar>
        <SearchForm onSubmit={submit}>
          <SearchBtn type='submit'>Search...</SearchBtn>
       
        <SearchInput
            type="text"
            name="input"
            value={searchQuery}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={search}
        />
           </SearchForm>
      </SearchBar>
    );
  }
}

export default Form;