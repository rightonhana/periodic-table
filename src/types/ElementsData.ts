import typeColor from "../const/typeColor";

export type ElementsData = {
    atomicNumber: number;
    atomicMass: number;
    group: number;
    period: number;
    name: string;
    symbol: string;
    special: boolean;
    state: string;//TODO: review this type
    electronConfiguration: string;
    metalMetalloidNonmetal: keyof typeof typeColor;
}
