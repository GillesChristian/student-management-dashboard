import { useState } from 'react';
import { deleteStudent } from '../StudentService';

export const useDeleteStudent = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteService = async (id) => {
        setLoading(true);
        try {
            await deleteStudent(id);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { deleteService, loading, error };
};
