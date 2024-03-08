import React from 'react';

import tableConfig from '../../data/tableConfig.json';
import tableElementsData from '../../data/tableElements.json';

import RowGroup from './components/RowGroup/RowGroup';

import * as S from './Table.styles';

import type { PeriodicTableConfig } from '../../types/config.types';

export default function Table() {
    return (
        <S.TableContainer>
            {tableConfig.map(
                ({
                    firstAtomicNumber,
                    lastAtomicNumber,
                    configuration,
                }: PeriodicTableConfig) => (
                    <S.RowContainer key={firstAtomicNumber}>
                        <RowGroup
                            elements={tableElementsData.slice(
                                firstAtomicNumber - 1,
                                firstAtomicNumber - 1 + configuration[0],
                            )}
                        />
                        <RowGroup
                            elements={tableElementsData.slice(
                                lastAtomicNumber - configuration[1],
                                lastAtomicNumber,
                            )}
                        />
                    </S.RowContainer>
                ),
            )}
        </S.TableContainer>
    );
}
