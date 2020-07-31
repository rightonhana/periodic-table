import React, {FC} from "react";
import ElementProps from "./ElementProps";
import Hexagon from "../Hexagon";
import {css} from "emotion";

export const Element: FC<ElementProps> = ({name = "", symbol = "", atomicNumber = 0, color = "#fff",  ...props}) => <Hexagon color={color} {...props}>
    <div className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1vmin 0 .5vmin 0;
        `}>
        <div className={css`
        font-weight: bold;
            font-size: 1.5vmin;
        `}>{atomicNumber}</div>
        <div className={css`
            font-size: 1vmin;
        `}>{name.toUpperCase()}</div>
    </div>
    <div className={css`
        font-size: 3vmin;
        font-weight: bold;
    `}>{symbol[0].toUpperCase() + symbol.slice(1)}</div>
</Hexagon>

export default Element;