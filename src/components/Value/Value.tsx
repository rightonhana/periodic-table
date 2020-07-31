import React, {FC} from "react";
import {css} from "emotion";
import ValueProps from "./ValueProps";

export const Value: FC<ValueProps> = ({value = "", color, ...props}) => <span className={css`
    color: var(${color ? color : "--element" });
`}
    {...props}>{value.toUpperCase()}</span>

export default Value;