import React from 'react';

const CarouselItem = ({ imageUrl, index }) => {
  const topOffset = index % 2 === 0 ? '0px' : '-30px';
  
  return (
    <div className="df aic jcc" style={{ 
      position: 'relative',
      top: topOffset,
      width: 'fit-content'
    }}>
      <img 
        src={imageUrl}
        height={396}
        alt="ImageSection-Item"
        style={{
          width: '100%',
          objectFit: 'cover',
          borderRadius: '16px'
        }}
      />
    </div>
  );
};

export default CarouselItem;