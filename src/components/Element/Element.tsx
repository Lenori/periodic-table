import React from 'react';

import * as S from './Element.styles';

import type { ElementPropTypes } from './Element.types';

export default function Element({ element }: ElementPropTypes) {
    return (
        <S.ElementContainer>
            <S.ElementAtomicNumber>
                {element.atomicNumber}
            </S.ElementAtomicNumber>

            <S.ElementSymbol>{element.symbol}</S.ElementSymbol>
            <S.ElementName>{element.name}</S.ElementName>
        </S.ElementContainer>
    );
}
