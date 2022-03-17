import axios from "axios";
import PropTypes from 'prop-types';

//===Записываем базовый API в axios===//
axios.defaults.baseURL = "https://pixabay.com/api/";

async function fetchApi(searchQuery, page) { 
  
  //===Создаем параметры запроса в интерфейсе URLSearchParams==//
  const dataInquiry = new URLSearchParams({
    key: "25225743-62355b18deaf2a31912b18441",
    q:searchQuery,
    page: page,
    per_page: 12,
    image_type: 'photo&orientation=horizontal'
  });

  //===Отлавливает ошибки запроса===//
  try {
    const response = await axios.get(`?${dataInquiry}`);
    return response.data;
  } catch (error) { 
    return Promise.reject(new Error(error.message))
  }
}


fetchApi.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
}

export default fetchApi;
