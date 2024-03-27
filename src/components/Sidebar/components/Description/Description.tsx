import React from 'react';

import * as S from './Description.styles';

import type { DescriptionPropTypes } from './Description.types';

export default function Description({ description }: DescriptionPropTypes) {
    return (
        <S.DescriptionContainer>
            <p>{description}</p>
        </S.DescriptionContainer>
    );
}
