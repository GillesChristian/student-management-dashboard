import React from 'react';

export default function InputDate({ register, error }) {
    return (
        <div>
            <label className='text-grey-300 text-14 block mb-1 tracking-wider'>
                Date Of Birth
            </label>
            <input
                type='date'
                {...register}
                className='border-2 border-grey-300 rounded w-[210px] h-[36px] p-2 outline-none text-grey-400' />
            {error && <p className='absolute text-accent text-14'>{error.message}</p>}
        </div>
    )
}
