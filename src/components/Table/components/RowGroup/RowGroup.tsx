import React from 'react';

import Element from 'components/Element/Element';

import * as S from './RowGroup.styles';

import type { RowGroupPropTypes } from './RowGroup.types';

export default function RowGroup({ elements }: RowGroupPropTypes) {
    return (
        <S.RowGroupContainer>
            {elements.map((item) => (
                <Element key={item.atomicNumber} element={item} />
            ))}
        </S.RowGroupContainer>
    );
}
