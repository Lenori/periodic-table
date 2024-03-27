import React, { createContext, useContext, useState } from 'react';

import type { PeriodicTableElement } from 'types/elements.types';

import tableElementsData from 'data/tableElements.json';

interface ElementContextPropTypes {
    data: PeriodicTableElement;
    setElement: (element: PeriodicTableElement) => void;
}

export const ElementContext = createContext({});

export function ElementProvider({ children }: { children: React.ReactNode }) {
    const [element, setElement] = useState<PeriodicTableElement>(
        tableElementsData[0],
    );

    return (
        <ElementContext.Provider value={{ data: element, setElement }}>
            {children}
        </ElementContext.Provider>
    );
}

export function useElement() {
    return useContext(ElementContext) as ElementContextPropTypes;
}
