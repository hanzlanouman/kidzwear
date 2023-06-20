import { Carousel } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import carImage from '../products/kidsCollection1.jpg';

export default function MainCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [carImage, carImage, carImage];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  return (
    <Carousel
      className='h-[40rem] relative'
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? 'bg-white w-8' : 'bg-white/50 w-4'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      activeIndex={activeIndex}
      onChange={(index) => setActiveIndex(index)}
    >
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt='Product here'
          className='h-full w-full object-cover'
        />
      ))}
    </Carousel>
  );
}
