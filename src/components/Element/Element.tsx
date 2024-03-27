import React from 'react';

import { useElement } from 'context/ElementContext';

import * as S from './Element.styles';

import type { ElementPropTypes } from './Element.types';

export default function Element({ element, large }: ElementPropTypes) {
    const elementContext = useElement();

    return (
        <S.ElementContainer
            onClick={() => elementContext.setElement(element)}
            groupBlock={element.groupBlock}
            large={large}
        >
            <S.ElementAtomicHeader>
                <p>{element.atomicNumber}</p>
                {large && <p>{element.atomicMass}</p>}
            </S.ElementAtomicHeader>

            <S.ElementSymbol>{element.symbol}</S.ElementSymbol>
            <S.ElementName>{element.name}</S.ElementName>
        </S.ElementContainer>
    );
}
