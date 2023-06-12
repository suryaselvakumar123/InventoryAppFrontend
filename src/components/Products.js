import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import Swal from 'sweetalert2';

const Products = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      title: 'iPhone 13 Pro',
      price: 999,
      createdBy: 'Apple',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFx7Eefy4pTdDEl8oBNBeY7F4rRqocYo3W6g&usqp=CAU',
    },
    {
      id: 2,
      title: 'Samsung Galaxy S22 Ultra',
      price: 800,
      createdBy: 'Samsung',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuTOdN-8MfhyddT_bKo8OZF8SvWGVbDpgtoUrUT3E-bNRMDvP-2-S0teuhw22BP0yJoU4&usqp=CAU',
    },
    {
      id: 3,
      title: 'Headphones',
      price: 9.99,
      createdBy: 'SONY',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVNZKBhe_bhZNTDH96z0bnJQ_qkgLN2onkw&usqp=CAUs',
    },
    {
      id: 4,
      title: 'shoes',
      price: 44.99,
      createdBy: 'Puma',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBwja0-QwKnqutfVHwriT5zrkHMTy5bgdGbZssPBVZIoCgrqnPUO5cRVM8rDKZyYm3vU&usqp=CAU',
    },
    {
      id: 5,
      title: 'T-shirt',
      price: 24.99,
      createdBy: 'Addidas',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXy_8V3uVhQLKtInpA4CU8q8S_h6yC-HA5mQ&usqp=CAU',
    },
    {
      id: 6,
      title: ' 1984',
      price: 29.99,
      createdBy: 'George Orwell',
      image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg',
    },

    {
        id: 7,
        title: ' Dell XPS 13',
        price: 1224.99,
        createdBy: ' Dell ',
        image: 'https://static.digit.in/default/xpsfull-32efab736c.jpeg?tr=w-1200',
      },
      {
        id: 8,
        title: ' Samsung 4K UHD Smart TV',
        price: 899.99,
        createdBy: 'Samsung',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiD5U4BeHHEropNeR5H5wIabTGKjcm0-pghA&usqp=CAU',
      },
  ];

  const handleAdd = (product) => {
    dispatch(add(product));
    Swal.fire({
      icon: 'success',
      title: 'Added to cart',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h6 style={{ fontSize: '18px', margin: '5px 0', textAlign: 'left', color: '#333' }}>{product.title}</h6>
          <p style={{ fontSize: '14px', margin: '0', textAlign: 'left', color: '#666' }}>Offered by <strong>{product.createdBy}</strong></p>
          <p style={{ fontSize: '14px', margin: '0', textAlign: 'left', color: '#666' }}><strong>${product.price}</strong></p>

          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
