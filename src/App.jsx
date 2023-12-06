import { useState, useRef } from 'react'
import './index.css'
import { Form } from 'react-bootstrap'

function App() {

  const searchInput = useRef(null);

  const handleSearch = (event) => {
      event.preventDefault();
  }

  return (
    <div className="container">
      <h1 className="title">Image Search</h1>
      <div className="search-section">
        <Form onSubmit={handleSearch}>
         <Form.Control type='Search' placeholder='Type Something To Search' className='search-input' ref={searchInput} />
        </Form>
      </div>
    </div>
  )
}

export default App
