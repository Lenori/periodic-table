import styled from 'styled-components';

import { RowGroupContainer } from './components/RowGroup/RowGroup.styles';

export const TableContainer = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 2rem;
`;

export const RowContainer = styled.section`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    ${RowGroupContainer}:last-of-type {
        justify-content: flex-end;
    }
`;
