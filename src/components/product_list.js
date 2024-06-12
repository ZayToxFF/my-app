import React, { useState } from 'react';

const productsData = [
  { id: 1, name: "Product 1", category: "Category A", price: 30 },
  { id: 2, name: "Product 2", category: "Category B", price: 20 },
  { id: 3, name: "Product 3", category: "Category A", price: 50 },
  { id: 4, name: "Product 4", category: "Category C", price: 40 },
  { id: 5, name: "Product 5", category: "Category B", price: 10 }
];

const ProductList = () => {
  const [products] = useState(productsData);
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (e) => { // Sert a changer la valeur de la categorie
    setCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value); // Sert a changer la valeur de l'ordre
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Sert a changer la valeur de la recherche
  };

  const filteredProducts = products
    .filter(product => category === '' || product.category === category) // Sert a filtrer les produits par categorie
    .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => { // Sert a trier les produits par ordre de prix
      if (sortOrder === 'asc') return a.price - b.price; // Si l'ordre est ascendant
      if (sortOrder === 'desc') return b.price - a.price; // Si l'ordre est descendant
      return 0; // Si l'ordre est par defaut
    });

  return (
    <div className="p-4">
            <div className="flex justify-between mb-4">
        <div>
          <label className="mr-2">Category:</label>
          <select className="p-2 border rounded" onChange={handleCategoryChange} value={category}>
            <option value="">All</option>
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            <option value="Category C">Category C</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Sort by Price:</label>
          <select className="p-2 border rounded" onChange={handleSortChange} value={sortOrder}>
            <option value="">None</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Search:</label>
          <input
            type="text"
            className="p-2 border rounded"
            onChange={handleSearchChange}
            value={searchQuery}
            placeholder="Search by name"
          />
        </div>
      </div>
      <div className='flex flex-row items-center justify-center flex-wrap gap-5'>
        {filteredProducts.map(product => ( // Sert a afficher les produits
          <div key={product.id} className="p-4 border mb-2 rounded w-96 h-32 shadow-md">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
