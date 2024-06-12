import React from 'react';
import ProductList from './components/product_list';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl">Product List</h1>
      </header>
      <main className="p-4 flex flex-row flex-wrap w-screen">
        <ProductList />
      </main>
    </div>
  );
}

export default App;
