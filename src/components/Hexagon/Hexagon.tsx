import {FC} from "react";
import {css} from "@emotion/css";
import HexagonProps from "./HexagonProps";

export const Hexagon: FC<HexagonProps> = ({
	color,
	name,
	children,
	...props
}) => <button className={
	css`
		background-color: var(--element);
		border: none;
		padding: 0;
		margin: 0;
		font: inherit;
		outline: inherit;
		height: var(--element-size);
		width: var(--element-size);
		color: inherit;
		display: flex;
		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		user-select: none;
		transition: transform 0.2s ease-in-out;

		:hover, :focus {
			background-color: var(${color});
			z-index: 1;
			transform: scale(1.3);
			div {
				color: var(${color});
			}
		}

	`}
	title={name}
	{...props}
>
	<div className={css`
		color: var(--element);
		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
		height: var(--inner-element-size);
		width: var(--inner-element-size);
		background-color: var(--body);

		:hover, :focus {
			color: var(${color});
		}
	`}>
		{children}
	</div>
</button>

export default Hexagon;