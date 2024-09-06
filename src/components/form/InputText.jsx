import React from 'react';

export default function InputText({ label, register, error }) {
    return (
        <div>
            <label className='text-grey-300 text-14 block mb-1 tracking-wider'>
                {label === 'Email' ? 'Email Address' : label}
            </label>
            <input
                {...register}
                placeholder={label}
                className='border-2 border-grey-300 rounded w-[324px] h-[36px] p-2 outline-none text-grey-400'
            />
            {error && <p className='text-accent text-14'>{error.message}</p>}
        </div>
    );
}
