import React, {FC} from "react";
//import {css} from "emotion";
import StateProps from "./StateProps";

export const State: FC<StateProps> = ({state = "solid", ...props}) => <div {...props}>
      State at 20°C: {state}
  </div>

export default State;