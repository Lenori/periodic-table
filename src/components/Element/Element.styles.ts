import styled, { css } from 'styled-components';

import groupBlockToCssVar from 'utils/groupBlockToCssVar';

interface ElementProps {
    groupBlock: string;
    large?: boolean;
}

export const ElementContainer = styled.section<ElementProps>`
    cursor: pointer;
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
    transition: filter 0.3s;

    &:hover {
        filter: brightness(80%);
    }

    ${(props) =>
        props.large &&
        css`
            width: 7rem;
            height: 7rem;

            p {
                font-size: 1rem;
            }

            ${ElementSymbol} {
                font-size: 3rem;
                margin: 0.5rem 0;
            }
        `}
`;

export const ElementAtomicHeader = styled.section`
    font-size: 0.9rem;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    p {
        margin: 0;
    }
`;

export const ElementSymbol = styled.p`
    margin: 0 0 0.2rem;
`;

export const ElementName = styled.p`
    margin: 0;
    font-size: 0.9rem;
`;
