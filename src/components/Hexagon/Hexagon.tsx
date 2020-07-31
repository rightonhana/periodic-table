import React, {FC} from "react";
import {css} from "emotion";
import HexagonProps from "./HexagonProps";

//border-radius: 50%;
//background-repeat: no-repeat;

//clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
//clip-path: polygon(50% 10%, 100% 30%, 100% 70%, 50% 90%, 0 70%, 0 30%);
export const Hexagon: FC<HexagonProps> = ({color, ...props}) => <div className={
    css`
      background-color: var(--element);
      height: 10vmin;
      width: 10vmin;
      display: flex;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      user-select: none;
      }
    `
  } {...props}/>

export default Hexagon;