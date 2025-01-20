import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './styles.js';
import CarouselItem from './CarouselItem.js';
import NavigationButton from './NavigationButton';
import { Navigation } from 'swiper/modules';

const images = [
  '/images/landing/carousel1.png',
  '/images/landing/carousel5.png',
  '/images/landing/carousel3.png',
  '/images/landing/carousel4.png',
  '/images/landing/carousel5.png',
  '/images/landing/carousel5.png',
];

const ImageSection = () => {
  const [swiper, setSwiper] = useState(null);

  const handlePrev = () => {
    swiper?.slidePrev();
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.header}>
        <Box style={styles.iconContainer}>
          <img
            src="/images/landing/networking.gif"
            alt="networking"
            style={{ width: '100%', height: '100%' }}
          />
        </Box>

        <Typography variant="h2" style={styles.heading}>
          Hoạt động tiêu biểu từ cộng đồng giáo dục
        </Typography>

        <Typography variant="body1" style={styles.description}>
          Hình ảnh được chính những giáo viên từ khắp 3 miền ghi lại trong quá trình giảng dạy,
          dạy học ứng dụng công nghệ SHub Classroom.
        </Typography>
      </Box>

      <Box style={styles.carouselContainer}>
        <Box style={styles.carouselWrapper}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView="auto"
            loop={true}
            loopedSlides={images.length}
            watchSlidesProgress={true}
            observer={true}
            observeParents={true}
            onSwiper={setSwiper}
            style={{ paddingTop: '30px' }}
            slideToClickedSlide={true}
          >
            {[...images, ...images].map((image, index) => (
              <SwiperSlide key={index} style={styles.carouselSlide}>
                <CarouselItem imageUrl={image} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>

          <NavigationButton direction="left" onClick={handlePrev} />
          <NavigationButton direction="right" onClick={handleNext} />
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSection;