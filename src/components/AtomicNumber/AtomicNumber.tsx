import React, {FC} from "react";
import AtomicNumberProps from "./AtomicNumberProps";
import Info from "../Info";

export const AtomicNumber: FC<AtomicNumberProps> = ({number = 1, ...props}) => <Info title={"Atomic Number"} value={`${number}`} {...props}/>

export default AtomicNumber;