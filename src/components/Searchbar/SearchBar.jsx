import React, { Component } from 'react';
import styles from '../Searchbar/SearchBar.module.css'

class Form extends Component { 
  state = {
    searchQuery:'',
  }

  

  //===Метод контолирует состояния поля поиска===//
  onSearch = e => { 
    this.setState({searchQuery: e.currentTarget.value})
  }


  //===Отправляем форму===//
  onSubmitForm = e => { 
    e.preventDefault()
    const { searchQuery } = this.state;

    if (searchQuery.trim() === '') { 
      alert('Enter the name');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({searchQuery: ''})
  }

  render() { 
    const { searchQuery } = this.state;
    const serach = this.onSearch;
    const submit = this.onSubmitForm;
    return (
      <header className={styles.header}>
        <form onSubmit={submit} className={styles.form}>
          <button type="submit">
            <span >Search</span>
          </button>

          <input
            type="text"
            value={searchQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={serach}
          />
        </form>
      </header>
    );
  }
}

export default Form;