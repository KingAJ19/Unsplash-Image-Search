import { useState, useRef } from 'react'
import './index.css'
import { Form } from 'react-bootstrap'


const API_URL = 'https://api.unsplash.com/search/photos';
// const API_KEY = '-CHxPUdU20SvjJocPcT6Q3XLRv5blB5LSLPTY1uMYrU'

function App() {
  console.log('key', import.meta.env.VITE_API_KEY);
  const searchInput = useRef(null);

  const handleSearch = (event) => {
      event.preventDefault();
      console.log(searchInput.current.value)
  }

  const handleSelection = (selection) => {
    searchInput.current.value = selection
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
