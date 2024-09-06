import React from 'react';

export default function Container({ children }) {
    return (
        <div className='flex items-center mx-auto h-[690px]'>
            {children}
        </div>
    )
}
