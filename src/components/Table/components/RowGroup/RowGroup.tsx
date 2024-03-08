import React from 'react';

import * as S from './RowGroup.styles';

import type { RowGroupPropTypes } from './RowGroup.types';

export default function RowGroup({ elements }: RowGroupPropTypes) {
    return (
        <S.RowGroupContainer>
            {elements.map((item) => (
                <p key={item.atomicNumber}>{item.atomicNumber}</p>
            ))}
        </S.RowGroupContainer>
    );
}
