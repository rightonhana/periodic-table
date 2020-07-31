import React, {FC} from "react";
import PeriodProps from "./PeriodProps";
import Info from "../Info";

export const Period: FC<PeriodProps> = ({period = 0, ...props}) => <Info title={"Period"} value={`${period}`} {...props}/>

export default Period;