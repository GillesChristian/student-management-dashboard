import React from 'react';

export default function Loader() {
    return (
        <div className='fixed inset-0 flex justify-center items-center h-screen w-screen bg-dark-blue-transparent opacity-50 backdrop-blur-2xl '>
            <div className='loader'></div>
        </div>
    )
}
