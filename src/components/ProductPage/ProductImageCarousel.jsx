import { Carousel, Typography } from '@material-tailwind/react';
import { useState, useEffect } from 'react';

export default function ProductImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    // Use picsum 4k links
    'https://picsum.photos/1900/1000',
    'https://picsum.photos/1900/1000',
    'https://picsum.photos/1900/1000',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Carousel
      className='h-[35rem] relative w-[49vw]'
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
          alt={`image ${index + 1}`}
          className='h-full w-full object-cover'
        />
      ))}
    </Carousel>
  );
}
