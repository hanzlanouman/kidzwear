import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
  Rating,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
  const { product } = props;
  return (
    <Link
      to={`/product-description/${product.id}`}
      key={product.id}
      state={{ product }}
    >
      <>
        <Card
          key={product.id}
          className='mt-2 w-[22rem] h-full cursor-pointer rounded-none shadow-l bg-white'
        >
          <CardHeader
            shadow={false}
            floated={false}
            className='h-[20rem] m-0 p-0 rounded-none'
          >
            <img
              src={product.image}
              className='w-full h-full object-cover m-0 p-0  transform transition-transform duration-1000 hover:scale-105'
              alt='Product'
              loading='lazy'
            />
          </CardHeader>
          <CardBody>
            <div className='flex flex-col items-center justify-between  mt-3'>
              <Typography
                color='blue-gray'
                className='text-center text-lg font-semibold'
              >
                {product.name}
              </Typography>
              <Rating value={4} readonly className='' />
              <Typography color='red' className='text-center font-bold'>
                ${product.price.toFixed(2)}
              </Typography>
            </div>
          </CardBody>
        </Card>
      </>
    </Link>
  );
}
