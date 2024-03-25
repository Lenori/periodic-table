import React from 'react';

import * as S from './GroupSelector.styles';

import tableGroupsData from 'data/tableGroups.json';

import Group from './components/Group/Group';

export default function GroupSelector() {
    return (
        <S.GroupSelectorContainer>
            {tableGroupsData.map((group) => (
                <Group key={group.id} group={group} />
            ))}
        </S.GroupSelectorContainer>
    );
}
