import styled from 'styled-components';

import groupBlockToCssVar from 'utils/groupBlockToCssVar';

export const GroupContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 3rem 1.5rem 0;
`;

export const GroupColor = styled.span<{ group: string }>`
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    background-color: var(${(props) => groupBlockToCssVar(props.group)});
    border-radius: 50%;
    border: 0.2rem solid var(--white);
`;

export const GroupName = styled.p`
    font-size: 1.6rem;
    margin: 0;
    color: var(--white);
`;
