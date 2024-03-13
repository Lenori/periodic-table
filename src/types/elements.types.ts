export interface PeriodicTableElement {
    atomicNumber: number;
    symbol: string;
    name: string;
    atomicMass: string;
    electronicConfiguration: string;
    electronegativity: number | string;
    atomicRadius: number | string;
    ionRadius: string;
    vanDerWaalsRadius: number | string;
    ionizationEnergy: number | string;
    electronAffinity: number | string;
    oxidationStates: number | string;
    standardState: string;
    bondingType: string;
    meltingPoint: number | string;
    boilingPoint: number | string;
    density: number | string;
    groupBlock: string;
    yearDiscovered: number | string;
    block: string;
    cpkHexColor: string;
    period: number;
    group: number;
}
