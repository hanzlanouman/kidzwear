import React, { useState } from 'react';
import { addProducts } from '../../Services/api';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: 0,
    description: '',
    image: '',
    category: '',
    quantity: 0,
    collection: '',
    rating: 0,
    sale: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    console.log('Clicked');
    e.preventDefault();
    alert('Product added successfully');
    addProducts(formData);
    setFormData({
      id: '',
      name: '',
      price: 0,
      description: '',
      image: '',
      category: '',
      quantity: 0,
      collection: '',
      rating: 0,
      sale: 'no',
    });
  };

  // const handleImageChange = (e) => {
  //   handleChange(e);
  //   const img = e.target.files[0];
  //   // Convert file to base64 string
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       image: reader.result,
  //     }));
  //     console.log(typeof reader.result);
  //   };
  //   reader.readAsDataURL(img);
  //   e.target.value = null;
  // };

  // const loadData = (e) => {
  //   e.preventDefault();
  //   STORE_DATA.map((item) => {
  //     let formData = {
  //       id: item.id,
  //       name: item.name,
  //       price: item.price,
  //       description: item.description,
  //       image: item.image,
  //       allImages: item.allImages,
  //       category: item.category,
  //       quantity: item.quantity,
  //       collection: item.collection,
  //       rating: item.rating,
  //       sale: item.sale,
  //       featured: item.featured,
  //     };
  //     addProducts(formData);
  //   });
  // };

  return (
    // <button onClick={loadData}>Click</button>
    <form
      onSubmit={handleSubmit}
      className='w-full max-w-md mx-auto my-20 border border-gray-100 rounded shadow-md p-20 bg-gray-100'
    >
      <h1 className='text-3xl font-semibold text-gray-700 text-center mb-10'>
        Add New Product
      </h1>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='ID'
        >
          Product Id
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='number'
          id='id'
          name='id'
          value={formData.id}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='name'
        >
          Product Name
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='price'
        >
          Price
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='number'
          id='price'
          name='price'
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='description'
        >
          Description
        </label>
        <textarea
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='description'
          name='description'
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='category'
        >
          Category
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          id='category'
          name='category'
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='quantity'
        >
          Quantity
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='number'
          id='quantity'
          name='quantity'
          value={formData.quantity}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='sale'
        >
          Sale
        </label>
        <select
          className='shadow border rounded w-full py-2 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline'
          id='sale'
          name='sale'
          value={formData.sale}
          onChange={handleChange}
          required
        >
          <option value=''>Select Sale</option>
          <option value='true'>True</option>
          <option value='false'>False</option>
        </select>
      </div>

      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='sale'
        >
          Feature
        </label>
        <select
          className='shadow border rounded w-full py-2 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline'
          id='featured'
          name='featured'
          value={formData.featured}
          onChange={handleChange}
          required
        >
          <option value=''>Select Sale</option>
          <option value='true'>True</option>
          <option value='false'>False</option>
        </select>
      </div>

      <div className='flex items-center justify-between'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
