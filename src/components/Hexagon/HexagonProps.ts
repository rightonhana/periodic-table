import {HTMLAttributes} from "react";

export interface HexagonProps extends HTMLAttributes<HTMLButtonElement> {
	color: string;
	name: string;
}

export default HexagonProps;