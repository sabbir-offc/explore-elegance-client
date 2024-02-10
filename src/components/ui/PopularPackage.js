"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import pk1 from '@/assets/pk1.jpeg'
import pk2 from '@/assets/pk2.jpeg'
import pk3 from '@/assets/pk3.jpeg'
import pk4 from '@/assets/pk4.jpeg'
import pk5 from '@/assets/pk5.jpeg'
import pk6 from '@/assets/pk6.jpeg'
import pk7 from '@/assets/pk7.jpeg'




const PopularPackage = () => {
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={false}
                modules={[Pagination]}

                className="mySwiper cursor-pointer"
            >
                <SwiperSlide>
                    <div className='relative rounded-lg overflow-hidden'>
                        <Image src={pk1} className='' alt='package rate' width={600} height={400} />
                        <div className='absolute bottom-0 flex flex-col justify-end bg-gradient-to-t from-gray-800  h-full w-full p-3'>
                            <h1 className='text-xl text-white'>Whitehaven Beach</h1>

                            <div className='flex justify-between items-center'>
                                <h2 className='text-gray-200'>$1100/night</h2>
                                <button className='capitalize font-poppins px-6 py-2 font-semibold rounded lg:block bg-[#1F89C9] text-white hover:bg-indigo-800 transition-colors duration-500'>Book now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative rounded-lg overflow-hidden'>
                        <Image src={pk2} className='' alt='package rate' width={600} height={400} />
                        <div className='absolute bottom-0 flex flex-col justify-end bg-gradient-to-t from-gray-800  h-full w-full p-3'>
                            <h1 className='text-xl text-white'>Maya Bay</h1>

                            <div className='flex justify-between items-center'>
                                <h2 className='text-gray-200'>$1000/night</h2>
                                <button className='capitalize font-poppins px-6 py-2 font-semibold rounded lg:block bg-[#1F89C9] text-white hover:bg-indigo-800 transition-colors duration-500'>Book now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative rounded-lg overflow-hidden'>
                        <Image src={pk3} className='' alt='package rate' width={600} height={400} />
                        <div className='absolute bottom-0 flex flex-col justify-end bg-gradient-to-t from-gray-800  h-full w-full p-3'>
                            <h1 className='text-xl text-white'>Seven Mile Beach</h1>

                            <div className='flex justify-between items-center'>
                                <h2 className='text-gray-200'>$1200/night</h2>
                                <button className='capitalize font-poppins px-6 py-2 font-semibold rounded lg:block bg-[#1F89C9] text-white hover:bg-indigo-800 transition-colors duration-500'>Book now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative rounded-lg overflow-hidden'>
                        <Image src={pk4} className='' alt='package rate' width={600} height={400} />
                        <div className='absolute bottom-0 flex flex-col justify-end bg-gradient-to-t from-gray-800  h-full w-full p-3'>
                            <h1 className='text-xl text-white'>Bora Bora Lagoon</h1>

                            <div className='flex justify-between items-center'>
                                <h2 className='text-gray-200'>$1350/night</h2>
                                <button className='capitalize font-poppins px-6 py-2 font-semibold rounded lg:block bg-[#1F89C9] text-white hover:bg-indigo-800 transition-colors duration-500'>Book now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative rounded-lg overflow-hidden'>
                        <Image src={pk5} className='' alt='package rate' width={600} height={400} />
                        <div className='absolute bottom-0 flex flex-col justify-end bg-gradient-to-t from-gray-800  h-full w-full p-3'>
                            <h1 className='text-xl text-white'>{`Anse Source d'Argent`}</h1>

                            <div className='flex justify-between items-center'>
                                <h2 className='text-gray-200'>$1500/night</h2>
                                <button className='capitalize font-poppins px-6 py-2 font-semibold rounded lg:block bg-[#1F89C9] text-white hover:bg-indigo-800 transition-colors duration-500'>Book now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative rounded-lg overflow-hidden'>
                        <Image src={pk6} className='' alt='package rate' width={600} height={400} />
                        <div className='absolute bottom-0 flex flex-col justify-end bg-gradient-to-t from-gray-800  h-full w-full p-3'>
                            <h1 className='text-xl text-white'>Balos Lagoon</h1>

                            <div className='flex justify-between items-center'>
                                <h2 className='text-gray-200'>$950/night</h2>
                                <button className='capitalize font-poppins px-6 py-2 font-semibold rounded lg:block bg-[#1F89C9] text-white hover:bg-indigo-800 transition-colors duration-500'>Book now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative rounded-lg overflow-hidden'>
                        <Image src={pk7} className='' alt='package rate' width={600} height={400} />
                        <div className='absolute bottom-0 flex flex-col justify-end bg-gradient-to-t from-gray-800  h-full w-full p-3'>
                            <h1 className='text-xl text-white'>Waikiki Beach</h1>

                            <div className='flex justify-between items-center'>
                                <h2 className='text-gray-200'>$1120/night</h2>
                                <button className='capitalize font-poppins px-6 py-2 font-semibold rounded lg:block bg-[#1F89C9] text-white hover:bg-indigo-800 transition-colors duration-500'>Book now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div >
    );
};

export default PopularPackage;