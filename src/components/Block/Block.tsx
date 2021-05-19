import {FC} from "react";
import BlockProps from "./BlockProps";
import Info from "../Info";

export const Block: FC<BlockProps> = ({block = "s", ...props}) => <Info title={"Block"} value={block} {...props}/>

export default Block;