import React from 'react';
import { Card, CardHeader } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
const CollectionCard = (props) => {
  const { collections } = props;

  return (
    <>
      {collections.map((collection) => (
        <Card className='mt-2 w-full sm:w-1/2 h-full cursor-pointer rounded-none shadow-sm px-3'>
          <Link to='/products' state={{ page: collection.name }}>
            <CardHeader
              shadow={false}
              floated={false}
              className='h-[30rem] m-0 p-0 rounded-none'
            >
              <img
                src={collection.img}
                className='w-full h-full object-cover m-0 p-0 transform transition-transform duration-1000 hover:scale-105'
                alt='Product'
              />
            </CardHeader>
          </Link>
        </Card>
      ))}
    </>
  );
};

export default CollectionCard;
