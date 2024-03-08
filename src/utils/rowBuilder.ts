import type { PeriodicTableConfig } from '../types/config.types';
import type { PeriodicTableElement } from '../types/elements.types';

interface RowBuilderPropTypes {
    configuration: PeriodicTableConfig;
    elements: PeriodicTableElement[];
}

export default function rowBuilder({
    configuration,
    elements,
}: RowBuilderPropTypes) {
    return elements;
}
