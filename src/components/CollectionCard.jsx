import React from 'react';
import { Card, CardHeader } from '@material-tailwind/react';
const CollectionCard = (props) => {
  const { collections } = props;
  return (
    <>
      {collections.map((collection) => (
        <Card className='mt-2 w-full h-full cursor-pointer rounded-none shadow-sm px-3'>
          <CardHeader
            shadow={false}
            floated={false}
            className='h-[30rem] m-0 p-0 rounded-none'
          >
            <img
              src={collection}
              className='w-full h-full object-cover m-0 p-0  transform transition-transform duration-1000 hover:scale-105'
              alt='Product'
            />
          </CardHeader>
        </Card>
      ))}
    </>
  );
};

export default CollectionCard;
