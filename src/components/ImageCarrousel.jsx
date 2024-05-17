import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const images = [
    { src: 'https://ecoyaan.com/images/carousel-1.png', heading: 'Follow us on Instagram', description: 'For climate news, lifestyle tips, & updates', buttonText: 'Follow Us', buttonLink: 'https://instagram.com/ecoyaan' },
    { src: 'https://ecoyaan.com/images/carousel-2.png', heading: 'Buy Less, Buy Better!', description: 'Authentic source of truth for your sustainability needs.', buttonText: 'About Us', buttonLink: '/about' },
    { src: 'https://ecoyaan.com/images/carousel-3.png', heading: 'Are you a business that truly cares about sustainability?', description: 'We would love to work with you', buttonText: 'Contact Us', buttonLink: '/contact' },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-carousel w-full relative mb-20">
      <div className="carousel-container relative sm:pb-20" style={{ height: 'auto', paddingTop: '36%' }}>
        <img
          src={images[currentImage].src}
          alt="Carousel Image"
          className="absolute top-0 left-0 w-full  object-cover cursor-pointer"
          style={{ height: 'auto', maxHeight: '660px' }}
        />
        <div className="overlay absolute inset-0 flex flex-col items-center justify-center md:justify-center md:items-start md:ml-16">
          {images[currentImage].heading && (
            <div className="text-center md:text-left mb-4 md:mb-8" style={{ maxWidth: '90vw' }}>
              <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-slate-800 mb-2 md:mb-4">{images[currentImage].heading}</h2>
              {images[currentImage].description && (
                <p className="text-sm sm:text-base md:text-xl text-slate-700 mb-2 md:mb-4">{images[currentImage].description}</p>
              )}
              {images[currentImage].buttonText && (
                <a
                  href={images[currentImage].buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-sm sm:text-base md:text-lg"
                >
                  {images[currentImage].buttonText}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
