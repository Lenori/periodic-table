import React from 'react';

import * as S from './InfoTable.styles';

import type { InfoTablePropTypes } from './InfoTable.types';

export default function InfoTable({ infoTable }: InfoTablePropTypes) {
    return (
        <S.InfoTableContainer>
            <p>{infoTable}</p>
        </S.InfoTableContainer>
    );
}
