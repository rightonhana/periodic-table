import { FC } from "react";
import { css } from "@emotion/css";
import ElementInfoProps from "./ElementInfoProps";
import Atom from "../Atom/Atom";
import styles from "./ElementInfo.module.css";

export const ElementInfo: FC<ElementInfoProps> = ({ element, ...props }) => <div className={styles.Grid}>
	<section>

	</section>
	<section className={css`color: tomato;`}>
		<Atom shells={element.electronsPerShell} size={14.5}/>
	</section>
	<section>

	</section>
</div>

export default ElementInfo;
