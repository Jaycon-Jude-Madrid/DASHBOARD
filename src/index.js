import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CustomerContextProvider } from './context/CustomerContext';
import { ProductContextProvider } from './context/ProductContext';
import { TransactionsContextProvider } from './context/TransactionsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TransactionsContextProvider>
    <ProductContextProvider>
      <CustomerContextProvider>
        <App />
      </CustomerContextProvider>
    </ProductContextProvider>

  </TransactionsContextProvider>

);

