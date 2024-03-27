import React from 'react';

import Element from 'components/Element/Element';

import tableElementsData from 'data/tableElements.json';

import * as S from './Sidebar.styles';

export default function Sidebar() {
    return (
        <S.SidebarContainer>
            <S.SidebarHeader>
                <Element element={tableElementsData[0]} large />

                <S.SidebarHeaderInfo>
                    <p>Hydrogen</p>
                    <p>Reactive non-metal</p>
                </S.SidebarHeaderInfo>
            </S.SidebarHeader>
        </S.SidebarContainer>
    );
}
