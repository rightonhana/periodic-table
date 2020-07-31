import React, { FC } from "react";
import { css } from "emotion";
import { elementsData } from "../../const/elementsData";
import Element from "../Element/Element";
import ElementInfoProps from "./ElementInfoProps";
import Group from "../Group";
import Period from "../Period";
import Block from "../Block";
import ElectronConfiguration from "../ElectronConfiguration";
import AtomicNumber from "../AtomicNumber";
import AtomicMass from "../AtomicMass";
import State from "../State";

export const ElementInfo: FC<ElementInfoProps> = ({
  name = "",
  symbol = "",
  atomicNumber = 0,
  ...props
}) => {
  const infoToRender = elementsData.find((element) => element.symbol === symbol);
  return (
    <div
      className={css`
        position: absolute;
        top: 2vmin;
        left: 33vmin;
        width: 100vmin;
        height: 30vmin;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5vw;
        color: var(--data);

        div {
          flex-grow: 1;
        }
        svg {
          width: 5vw;
          height: 5vw;
        }
      `}
      {...props}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
          font-size: 1vw;
        `}
      >
        <AtomicNumber number={infoToRender?.atomicNumber} />
        <AtomicMass mass={infoToRender?.atomicMass} />
        <Group group={18} />
        <Period period={1} />
        <Block block={"s"} />
        <ElectronConfiguration configuration={"1s2"} />
        <State state={infoToRender?.state} />
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          color: var(--text);
          p {
            color: var(--data);
          }
        `}
      >
        <p>{name.toUpperCase()} INFORMATION</p>
        <Element
          name={name}
          symbol={symbol}
          atomicNumber={atomicNumber}
          color={"--unknown"}
        />
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
          font-size: 1vw;
        `}
      >Classification: {infoToRender?.metalMetalloidNonmetal}</div>
    </div>
  );
};
export default ElementInfo;
