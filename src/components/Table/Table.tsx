import React, {FC} from "react";
import Element from "../Element";
import { css } from "emotion";
import TableProps from "./TableProps";
import { elementsData } from "../../const/elementsData";
import typeColor from "../../const/typeColor";
import { ElementsData } from "../../types/ElementsData";

export const Table: FC<TableProps> = ({width = 0, height = 0, ...props}) => {
/**div:nth-child(72), div:nth-child(104) {
            grid-column-start: 4;
        } 
        
        grid-row-start: 10;*/

         /**tabIndex={index} TODO:*/
    return (
        <div className={css`
        display: grid;
        grid-template-columns: repeat(18, 1fr);
        grid-gap: 0;

        div:nth-child(2) {
            grid-column-start: -2;
        }

        div:nth-child(5), div:nth-child(13) {
            grid-column-start: 13;
        }

        div:nth-child(94), div:nth-child(108) {
            grid-column-start: 5;
        }
      `}>
            {elementsData.map((element: ElementsData, index) => <Element
            tabIndex={element.atomicNumber}
            key={index}
            atomicNumber={element.atomicNumber}
            name={element.name} symbol={element.symbol}
            color={typeColor[element.metalMetalloidNonmetal]}/>)}
        </div>
    )
}

export default Table;