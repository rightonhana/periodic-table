import {FC} from "react";
import StateProps from "./StateProps";
import Info from "../Info";

export const State: FC<StateProps> = ({state = "solid", ...props}) => <Info title={"State at 20°C"} value={`${state}`} {...props}/>

export default State;