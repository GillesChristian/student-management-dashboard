import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useCreateStudent } from '../service/hooks/useCreateStudent';
import UseForm from '../components/form/UseForm';
import Loader from '../components/Loader';

export default function AddStudent() {
    const { create, loading, error } = useCreateStudent();
    const navigate = useNavigate();

    const handleSubmit = async (data) => {
        await create(data);
        navigate(`/students`);
        if (error)
            console.log(error)
    };

    return (
        <>
            {loading && <Loader />}
            <div>
                <h1 className='text-36 text-grey-400 mb-16 tracking-wider'>Add Student</h1>
                <UseForm buttonText={'Add Student'} onSubmitForm={handleSubmit} />
            </div>
        </>
    )
}
