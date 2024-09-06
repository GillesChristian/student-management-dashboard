import React from 'react';

export default function CardList({ label, title }) {
    return (
        <div className='flex flex-col text-center my-5 text-white text-16'>
            <span className='font-bold mb-1'>{label}</span>
            <span className='font-medium'>{title}</span>
        </div>
    )
}
