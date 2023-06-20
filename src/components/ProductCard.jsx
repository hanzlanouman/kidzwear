import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
  Rating,
} from '@material-tailwind/react';
import React, { useContext } from 'react';
import { CartContext } from '../contexts/Cart.context';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
  const { product } = props;
  const { setCart } = useContext(CartContext);

  const updateCart = (product, quantity) => {
    setCart(product);
  };
  return (
    <>
      <Card
        key={product.id}
        className='mx-auto border-gray-500 w-full sm:w-[22rem]  h-full cursor-pointer rounded-none shadow-l bg-white'
      >
        <Link
          to={`/product-description/${product.id}`}
          key={product.id}
          state={{ product }}
        >
          <CardHeader
            shadow={false}
            floated={false}
            className='h-[20rem] m-0 p-0 rounded-none'
          >
            <img
              src={product.image}
              className='w-full h-full object-cover m-0 p-0 transform transition-transform duration-1000 hover:scale-105'
              alt='Product'
              loading='lazy'
            />
          </CardHeader>
          <CardBody>
            <div className='flex flex-col items-center justify-between mt-3'>
              <Typography
                color='blue-gray'
                className='text-center text-lg font-semibold'
              >
                {product.name}
              </Typography>
              <Rating value={product.rating} readonly className='mt-2' />
              <Typography color='red' className='text-center font-bold mt-2'>
                Rs. {product.price.toFixed(2)}
              </Typography>
            </div>
          </CardBody>
        </Link>
        <Button
          className='bg-gray-900 rounded-none'
          onClick={(e) => updateCart(product)}
        >
          Add to Cart
        </Button>
      </Card>
    </>
  );
}
