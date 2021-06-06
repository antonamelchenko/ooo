import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'

import './BooksSlider.css'

import book1 from '../../images/test__book1.jpg'
import book2 from '../../images/test__book2.jpg'
import book3 from '../../images/test__book3.jpg'
import book4 from '../../images/test__book4.png'
import book5 from '../../images/test__book5.jpg'
import book6 from '../../images/test__book6.jpg'
import book7 from '../../images/test__book7.png'
import book8 from '../../images/test__book8.jpg'
import book9 from '../../images/test__book9.jpg'

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper/core'

SwiperCore.use([Navigation, EffectCoverflow, Pagination, Autoplay])

const BooksSlider = () => {
  return (
    <div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#2CCFBF',
          '--swiper-pagination-color': '#2CCFBF',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        navigation={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className='booksSlider'
      >
        <SwiperSlide>
          <img src={book1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={book2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={book3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={book4} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={book5} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={book6} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={book7} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={book8} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={book9} alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BooksSlider
