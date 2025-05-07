import React, { useState } from "react";

const ProductList = () => {

const [products, setProducts] = useState([
{ id: 1, name: "Laptop", price: 800 },
{ id: 2, name: "Phone", price: 500 },
]);

return (
<div>
<h2>Product List</h2>
<ul>
{products.map((product) => (
<li key={product.id}>{product.name} - ${product.price}</li>
))}
</ul>
</div>
);
};

export default ProductList;