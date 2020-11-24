import * as React from 'react';
import CustomerList from './master/customer/CustomerList';
import ProductList from './master/product/ProductList';

function App() {
  return (
    <div className='app'>
      <h1>Hello world! This is my app.</h1>
      <ProductList />
      <CustomerList />
    </div>
  );
}

export default App;
