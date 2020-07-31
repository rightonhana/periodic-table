import React, {FC} from "react";
//import {css} from "emotion";
import ElectronConfigurationProps from "./ElectronConfigurationProps";

export const ElectronConfiguration: FC<ElectronConfigurationProps> = ({configuration = "1s1", ...props}) => <div {...props}>
      Electron Configuration: {configuration}
  </div>

export default ElectronConfiguration;