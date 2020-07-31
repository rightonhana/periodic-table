import React, {FC} from "react";
//import {css} from "emotion";
import AtomicNumberProps from "./AtomicNumberProps";

export const AtomicNumber: FC<AtomicNumberProps> = ({number = 1, ...props}) => <div {...props}>
      AtomicNumber: {number}
  </div>

export default AtomicNumber;