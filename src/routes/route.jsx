import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '../App';
import Dashboard from '../pages/Dashboard';
import Students from '../pages/Students';
import AddStudent from '../pages/AddStudent';
import EditStudent from '../pages/EditStudent';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Navigate to='/dashboard' replace />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
            {
                path: '/students',
                element: <Students />,
            },
            {
                path: '/students/:id',
                element: <Students />,
            },
            {
                path: '/students/create-student',
                element: <AddStudent />,
            },
            {
                path: '/students/edit-student/:id',
                element: <EditStudent />,
            },
        ]
    },

]);