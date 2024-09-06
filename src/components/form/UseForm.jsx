import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import InputText from './InputText';
import InputDate from './InputDate';
import Button from '../Button';

export default function UseForm({ buttonText, student = {}, onSubmitForm }) {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    useEffect(() => {
        if (student && (buttonText === 'Edit Student')) {
            setValue('first_name', student.firstName);
            setValue('last_name', student.lastName);
            setValue('email', student.email);
            setValue('date_of_birth', student.dateOfBirth);
        }
    }, [student, setValue]);

    const onSubmit = (data) => {
        onSubmitForm(data);
    };

    return (
        <form className='space-y-10' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex gap-x-14'>
                <InputText
                    key='first_name'
                    label='First Name'
                    register={register('first_name', {
                        required: 'First name is required',
                        minLength: {
                            value: 3,
                            message: 'First name must be at least 3 characters long'
                        },
                    })}
                    error={errors.first_name}
                />

                <InputText
                    key='last_name'
                    label='Last Name'
                    register={register('last_name', {
                        required: 'Last name is required',
                        minLength: {
                            value: 3,
                            message: 'Last name must be at least 3 characters long'
                        },
                    })}
                    error={errors.last_name}
                />
            </div>

            <div className='flex gap-x-14'>
                <InputText
                    key='email'
                    label='Email'
                    register={register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/,
                            message: 'Enter a valid email address',
                        },
                    })}
                    error={errors.email}
                />

                <InputDate
                    key='date_of_birth'
                    register={register('date_of_birth', {
                        required: 'Date of birth is required',
                    })}
                    error={errors.date_of_birth}
                />
            </div>

            <Button buttonText={buttonText} color='bg-grey-200 text-grey-500' type='submit' />
        </form>
    );
}
