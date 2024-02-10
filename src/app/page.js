import Banner from '@/components/ui/Banner';
import PopularPackage from '@/components/ui/PopularPackage';
import React from 'react';

const HomePage = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center items-center  mt-10'>
        <div className='flex-auto w-full'>
          <div className='flex items-center gap-3'>
            <hr className='inline border-2 border-[#1F89C9] w-10' />
            <h1 className='text-xl uppercase font-bold'>{`Let's go holiday`}</h1>
          </div>

          <h1 className='text-5xl font-poppins font-semibold mt-5'>Explore the world, <br /> one adventure at a time.</h1>
          <p className='w-2/3  mt-8 font-poppins'>Escape the ordinary and discover unforgettable journeys with ExploreElegance. We offer curated travel experiences for every type of traveler, from adventurous backpackers to luxury seekers. Explore hidden gems, immerse yourself in local cultures, and create memories that last a lifetime. Start planning your dream vacation today!</p>
        </div>


        <Banner />

      </div>
      <div className='mt-10'>

        <PopularPackage />
      </div>
    </div>
  );
};

export default HomePage;