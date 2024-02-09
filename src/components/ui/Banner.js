"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import banner1 from '@/assets/banner1.jpeg'
import banner2 from '@/assets/banner2.jpeg'
import banner3 from '@/assets/banner3.jpeg'
import banner4 from '@/assets/banner4.jpeg'
import banner5 from '@/assets/banner5.jpeg'
import banner6 from '@/assets/banner6.jpeg'
import banner7 from '@/assets/banner7.jpeg'
const Banner = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image alt='banner image' width={500} height={400} src={banner1} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt='banner image' width={500} height={400} src={banner2} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt='banner image' width={500} height={400} src={banner3} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt='banner image' width={500} height={400} src={banner4} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt='banner image' width={500} height={400} src={banner5} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt='banner image' width={500} height={400} src={banner6} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt='banner image' width={500} height={400} src={banner7} />
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;