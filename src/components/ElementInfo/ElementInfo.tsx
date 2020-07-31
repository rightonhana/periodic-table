import React, { FC } from "react";
import { css } from "emotion";
import Element from "../Element/Element";
import ElementInfoProps from "./ElementInfoProps";
import Group from "../Group";
import Period from "../Period";
import Block from "../Block";
import ElectronConfiguration from "../ElectronConfiguration";
import AtomicNumber from "../AtomicNumber";
import AtomicMass from "../AtomicMass";
import State from "../State";

export const ElementInfo: FC<ElementInfoProps> = ({ element, ...props }) => <div
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
      <section
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
          font-size: 1vw;
        `}
      >
        <AtomicNumber number={element.atomicNumber} />
        <AtomicMass mass={element.atomicMass} />
        <Group group={18} />
        <Period period={1} />
        <Block block={"s"} />
        <ElectronConfiguration configuration={element.electronConfiguration} />
        <State state={element.state} />
      </section>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 15vmin;
          color: var(--text);
          p {
            color: var(--data);
          }
        `}
      >
        <p>{element.name.toUpperCase()} INFORMATION</p>
        <Element
          name={element.name}
          symbol={element.symbol}
          atomicNumber={element.atomicNumber}
          color={element.metalMetalloidNonmetal}
        />
      </div>
      <section
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
          font-size: 1vw;
        `}
      >
        Classification: {element.metalMetalloidNonmetal}
      </section>
    </div>

export default ElementInfo;
