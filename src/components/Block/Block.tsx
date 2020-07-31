import React, {FC} from "react";
//import {css} from "emotion";
import BlockProps from "./BlockProps";

export const Block: FC<BlockProps> = ({block = "s", ...props}) => <div {...props}>
      Block: {block}
  </div>

export default Block;