import React, {FC} from "react";
//import {css} from "emotion";
import GroupProps from "./GroupProps";

export const Group: FC<GroupProps> = ({group = 0, ...props}) => <div {...props}>
      Group: {group}
  </div>

export default Group;