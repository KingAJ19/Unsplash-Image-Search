import { useState, useRef, useEffect } from 'react'
import './index.css'
import axios from 'axios';
import { Form } from 'react-bootstrap'


const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGES_PER_PAGE = 20;


function App() {
  const searchInput = useRef(null);

  // useEffect(() => {
  //   const getImages = async () => {
      
  //   };

  //   getImages();
  // }, []);

  const fetchImages = async () => {
    try {
      const result  = await axios.get(`${API_URL}?query=${searchInput.current.value}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`);
      console.log('result', result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = (event) => {
      event.preventDefault();
      console.log(searchInput.current.value)
  }

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    fetchImages();
  }

  return (
    <div className="container">
      <h1 className="title">Image Search</h1>
      <div className="search-section">
        <Form onSubmit={handleSearch}>
         <Form.Control type='Search' placeholder='Type Something To Search' className='search-input' ref={searchInput} />
        </Form>
      </div>
      <div className="filters">
        <div onClick={() => handleSelection('nature')}>Nature</div>
        <div onClick={() => handleSelection('birds')}>Birds</div>
        <div onClick={() => handleSelection('cats')}>Cats</div>
        <div onClick={() => handleSelection('shoes')}>Shoes</div>
      </div>
    </div>
  )
}

export default App
