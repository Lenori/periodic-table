import styled from 'styled-components';

import groupBlockToCssVar from 'utils/groupBlockToCssVar';

export const ElementContainer = styled.section<{ groupBlock: string }>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 5rem;
    height: 5rem;
    font-size: 2rem;
    color: var(--white);
    background-color: var(${(props) => groupBlockToCssVar(props.groupBlock)});
    padding: 0.5rem;
    border-radius: 0.5rem;
`;

export const ElementAtomicNumber = styled.p`
    margin: 0;
    font-size: 0.9rem;
    width: 100%;
    display: flex;
    align-items: flex-start;
`;

export const ElementSymbol = styled.p`
    margin: 0 0 0.2rem;
`;

export const ElementName = styled.p`
    margin: 0;
    font-size: 0.9rem;
`;
