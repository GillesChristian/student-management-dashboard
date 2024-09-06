import React from 'react';

import Container from '../components/Container';
import StudentView from '../components/students/StudentView';

export default function Students() {
    return (
        <div id='students'>
            <Container>
                <StudentView />
            </Container>
        </div>
    )
}
