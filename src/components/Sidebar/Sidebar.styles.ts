import styled from 'styled-components';

export const SidebarContainer = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 40rem;
    color: var(--white);
    margin-left: var(--spacing-m);

    p {
        margin: 0;
    }
`;

export const SidebarHeader = styled.section`
    display: flex;
    align-items: flex-start;
`;

export const SidebarHeaderInfo = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;
