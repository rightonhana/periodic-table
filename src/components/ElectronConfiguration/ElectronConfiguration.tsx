import {FC} from "react";
//import {css} from "@emotion/css";
import ElectronConfigurationProps from "./ElectronConfigurationProps";
import Info from "../Info";

export const ElectronConfiguration: FC<ElectronConfigurationProps> = ({configuration = "1s1", ...props}) => <Info title={"Electron Configuration"} value={configuration} {...props}/>

export default ElectronConfiguration;