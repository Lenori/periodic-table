import React from 'react';

import { useElement } from 'context/ElementContext';

import Element from 'components/Element/Element';

import Description from './components/Description/Description';
import InfoTable from './components/InfoTable/InfoTable';

import * as S from './Sidebar.styles';

export default function Sidebar() {
    const elementContext = useElement();

    return (
        <S.SidebarContainer>
            <S.SidebarHeader>
                <Element element={elementContext.data} large />

                <S.SidebarHeaderInfo>
                    <p>{elementContext.data.name}</p>
                    <span>Reactive non-metal</span>
                </S.SidebarHeaderInfo>
            </S.SidebarHeader>

            <Description description={'Description'} />
            <InfoTable infoTable={'Info Table'} />
        </S.SidebarContainer>
    );
}
