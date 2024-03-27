import React from 'react';

import Table from 'components/Table/Table';
import Sidebar from 'components/Sidebar/Sidebar';
import GroupSelector from 'components/GroupSelector/GroupSelector';

import * as S from './Home.styles';

export default function Home() {
    return (
        <S.MainContainer>
            <S.ContentContainer>
                <Table />
                <Sidebar />
            </S.ContentContainer>

            <GroupSelector />
        </S.MainContainer>
    );
}
