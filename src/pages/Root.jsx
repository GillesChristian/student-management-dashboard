import React from 'react';
import { Outlet } from 'react-router-dom';

import AppLayout from '../components/AppLayout';
import SideBar from '../components/SideBar';
import Container from '../components/Container';


export default function Root() {
    return (
        <>
            <AppLayout>
                <SideBar />
                <Container>
                    <Outlet />
                </Container>
            </AppLayout>
        </>
    )
}
