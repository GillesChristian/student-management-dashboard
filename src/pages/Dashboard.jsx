import React from 'react';

import Container from '../components/Container';
import GroupMenuList from '../components/dashboard/GroupMenuList';

export default function Dashboard() {
    return (
        <div id='dashboard'>
            <Container>
                <GroupMenuList />
            </Container>

        </div>
    )
}
