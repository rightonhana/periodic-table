import {FC} from "react";
import {css} from "@emotion/css";
import TitleProps from "./TitleProps";

export const Title: FC<TitleProps> = ({title = "", ...props}) => <strong className={css`
	font-weight: bold;
	font-size: 5rem;
`}
	{...props}>{title.toUpperCase()}</strong>

export default Title;