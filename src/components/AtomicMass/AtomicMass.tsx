import React, {FC} from "react";
//import {css} from "emotion";
import AtomicMassProps from "./AtomicMassProps";

export const AtomicMass: FC<AtomicMassProps> = ({mass = 1, ...props}) => <div {...props}>
      AtomicMass: {mass}
  </div>

export default AtomicMass;