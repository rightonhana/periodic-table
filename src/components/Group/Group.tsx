import React, {FC} from "react";
import GroupProps from "./GroupProps";
import Info from "../Info";

export const Group: FC<GroupProps> = ({group = 0, ...props}) => <Info title={"Group"} value={`${group}`} {...props}/>

export default Group;