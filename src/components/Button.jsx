import React from 'react';

export default function Button({ buttonText, onClick = () => { }, color, type = 'button' }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`text-14 text-center py-2 px-3 min-w-32 ${color} rounded border-none font-semibold tracking-wide`}>
            {buttonText}
        </button>
    )
}
