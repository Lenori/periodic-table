import React from 'react';

import Table from 'components/Table/Table';
import GroupSelector from 'components/GroupSelector/GroupSelector';

import * as S from './Home.styles';

export default function Home() {
    return (
        <S.Container>
            <Table />
            <GroupSelector />
        </S.Container>
    );
}
