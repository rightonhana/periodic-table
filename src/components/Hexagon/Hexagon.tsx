import {FC} from "react";
import HexagonProps from "./HexagonProps";
import styles from "./Hexagon.module.css";
import CategoryColors from "../../enums/CategoryColors";

export const Hexagon: FC<HexagonProps> = ({
	color,
	name,
	currentCategory,
	children,
	...props
}) => {
	var style = {"--color": color, "--element-color": currentCategory ? CategoryColors[currentCategory] : "var(--element)"} as React.CSSProperties;
	return (
		<button style={style} className={styles.Hexagon} title={name} {...props}>
			<div className={styles.InnerHexagon}>
				{children}
			</div>
		</button>
	);
}

export default Hexagon;