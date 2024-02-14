import React from 'react';
import { Spinner } from "@nextui-org/react";

const LoadingPage = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-96px)] w-full'>
            <Spinner label="Loading..." color="warning" />
        </div>
    );
};

export default LoadingPage;