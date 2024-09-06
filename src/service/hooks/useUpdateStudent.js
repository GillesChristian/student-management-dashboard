import { useState } from 'react';

import { updateStudent } from '../StudentService';

export const useUpdateStudent = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const update = async (id, studentData) => {
        setLoading(true);
        try {
            const response = await updateStudent(id, studentData);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { update, loading, error };
};
