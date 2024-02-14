import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div className='w-full min-h-[calc(100vh-96px)] flex flex-col justify-center items-center gap-4'>

            <h1>You entered a wrong url | <span className='text-red-500 font-bold'>404</span></h1>

            <Link href={'/'}>
                <button className='bg-blue-600 text-white font-semibold py-2 px-4 rounded-md'>

                    GO Back
                </button>
            </Link>
        </div>
    );
};

export default notFound;