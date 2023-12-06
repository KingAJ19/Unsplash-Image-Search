import { useState } from 'react'
import './index.css'
import { Form } from 'react-bootstrap'

function App() {
  return (
    <div className="container">
      <h1 className="title">Image Search</h1>
      <div className="search-section">
        <Form>
        <Form.Control type='Search' placeholder='Type Something To Search' className='search-input' />
        </Form>
      </div>
    </div>
  )
}

export default App
