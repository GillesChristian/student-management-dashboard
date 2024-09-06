import { useState } from 'react';

import { createStudent } from '../StudentService';

export const useCreateStudent = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const create = async (studentData) => {
        setLoading(true);
        try {
            await createStudent(studentData);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { create, loading, error };
};
