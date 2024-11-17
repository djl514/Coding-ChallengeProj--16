import React from 'react'
import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import products from './components/Array';


function App() {
  return (
    <>
      <div>
      <ProductList/>
      <AddProductForm/>
      </div>
    </>
  )
}

export default App
