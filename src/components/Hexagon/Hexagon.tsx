import {FC} from "react";
import {css} from "@emotion/css";
import HexagonProps from "./HexagonProps";

//border-radius: 50%;
//background-repeat: no-repeat;

//clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
//clip-path: polygon(50% 10%, 100% 30%, 100% 70%, 50% 90%, 0 70%, 0 30%);
export const Hexagon: FC<HexagonProps> = ({color, ...props}) => <button className={
	css`
		background-color: var(--element);
		border: none;
		padding: 0;
		font: inherit;
		outline: inherit;
		height: 10vmin;
		width: 10vmin;
		color: inherit;
		display: flex;
		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		cursor: pointer;
		user-select: none;

		:hover, :focus {
			background-color: var(${color});
			color: var(--element);
		}
	`
} {...props}/>

export default Hexagon;