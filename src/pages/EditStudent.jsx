import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useUpdateStudent } from '../service/hooks/useUpdateStudent';
import UseForm from '../components/form/UseForm';
import Loader from '../components/Loader';

export default function EditStudent() {
    const location = useLocation();
    const navigate = useNavigate();

    const { student } = location.state || {};
    const { update, loading, error } = useUpdateStudent();

    const handleSubmit = async (formData) => {
        if (student && student.stdID) {
            try {
                await update(student.stdID, formData);
                navigate(`/students`);
            } catch (error) {
                console.error('Error updating student:', error);
            }
        }
    };

    return (
        <>
            {loading && <Loader />}
            <div>
                <h1 className='text-36 text-grey-400 mb-16 tracking-wide'>Edit Student</h1>
                <UseForm student={student} buttonText={'Edit Student'} onSubmitForm={handleSubmit} />
            </div>
        </>
    );
}
