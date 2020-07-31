import HexagonProps from "../Hexagon/HexagonProps";

export interface ElementProps extends HexagonProps {
    name: string;
    symbol: string;
    atomicNumber: number;
}

export default ElementProps;