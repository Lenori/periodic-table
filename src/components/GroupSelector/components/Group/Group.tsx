import React from 'react';

import * as S from './Group.styles';

import type { GroupPropTypes } from './Group.types';

export default function Group({ group }: GroupPropTypes) {
    return (
        <S.GroupContainer>
            <S.GroupColor group={group.group} />
            <S.GroupName>{group.name}</S.GroupName>
        </S.GroupContainer>
    );
}
