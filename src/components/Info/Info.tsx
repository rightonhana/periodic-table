import React, {FC} from "react";
import {css} from "emotion";
import InfoProps from "./InfoProps";
import Title from "../Title";
import Value from "../Value";

export const Info: FC<InfoProps> = ({title = "", value = "", ...props}) => <div className={css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  font-size: 4rem;
  margin: 1rem 0;
`
} {...props}>
      <Title title={title}/>
      <Value value={value}/>
</div>

export default Info;