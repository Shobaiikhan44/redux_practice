// src/features/products/ProductList.jsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from './productSlice';
import { addTodo } from '../features/todos/TodoSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);
const handleAddCart = (id) =>{
    console.log(id); 
    dispatch(addTodo)
}
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProduct());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div className="text-center mt-5">Loading...</div>;
  if (status === 'failed') return <div className="text-danger text-center mt-5">Error: {error.message}</div>;

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Products</h2>
      <div className="row">
        {items.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top p-4"
                alt={product.title}
                style={{ height: '250px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">${product.price}</p>
                <p className="card-text">{product.description.slice(0, 100)}...</p>
              </div>
              <button className='btn btn-primary' onClick={() => handleAddCart(product.id)} >Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
