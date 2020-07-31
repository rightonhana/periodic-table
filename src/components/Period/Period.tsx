import React, {FC} from "react";
//import {css} from "emotion";
import PeriodProps from "./PeriodProps";

export const Period: FC<PeriodProps> = ({period = 0, ...props}) => <div {...props}>
      Period: {period}
  </div>

export default Period;