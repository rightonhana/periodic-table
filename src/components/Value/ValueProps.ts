import typeColor from "../../const/typeColor";

export interface ValueProps {
    /** Value render */
    value: string;

    color?: keyof typeof typeColor;
}

export default ValueProps;