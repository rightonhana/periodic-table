import {FC} from "react";
import AtomicMassProps from "./AtomicMassProps";
import Info from "../Info";

export const AtomicMass: FC<AtomicMassProps> = ({mass = 1, ...props}) => <Info title={"Atomic Mass"} value={`${mass}`} {...props}/>

export default AtomicMass;