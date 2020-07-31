import React, {FC} from "react";
import Element from "../Element";
import { css } from "emotion";
import TableProps from "./TableProps";
import { elementsData } from "../../const/elementsData";
import typeColor from "../../const/typeColor";
import { ElementsData } from "../../types/ElementsData";

export const Table: FC<TableProps> = ({width = 0, height = 0, onElementClick, ...props}) => {
/*      button:nth-child(72), button:nth-child(104) {
            grid-column-start: 4;
        }

        button:nth-child(94) {
            grid-row-start: 9;
        }

        button:nth-child(108) {
            grid-row-start: 10;
        }*/
    return (
        <div className={css`
        display: grid;
        grid-template-columns: repeat(18, 1fr);
        grid-gap: 0;
        position: relative;
        margin: 5rem 0 0 3rem;

        button:nth-child(2) {
            grid-column-start: -2;
        }

        button:nth-child(5), button:nth-child(13) {
            grid-column-start: 13;
        }

        button:nth-child(94), button:nth-child(108) {
            grid-column-start: 5;
        }
      `}>
            {elementsData.map((element: ElementsData, index) => <Element
            tabIndex={element.atomicNumber}
            key={index}
            atomicNumber={element.atomicNumber}
            name={element.name} symbol={element.symbol}
            color={typeColor[element.metalMetalloidNonmetal]}
            onClick={() => onElementClick(element)}
            />)}
        </div>
    )
}

export default Table;