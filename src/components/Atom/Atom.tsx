import {FC} from "react";
import AtomProps from "./AtomProps";
import styles from "./Atom.module.css";

export const Atom: FC<AtomProps> = ({
	size,
	shells = [1],
	...props
}) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" width={`${size}rem`} height={`${size}rem`} className={styles.Atom} {...props}>
		{
			shells.map((electrons, index) => (
				<g key={index} className={styles.Orbit} style={{["--speed" as string]: 7 * (index + 1)}}>
					{[...Array(electrons).keys()].map((item, electronIndex) =>
						<circle 
							key={`${index}-${electronIndex}`}
							cx="56"
							cy={`${44 - (6 * index)}`}
							r="2"
							transform-origin="center"
							transform={`rotate(${360 / electrons * item})`}
						/>
					)}
					<circle
						cx="56"
						cy="56"
						r={`${12 + (6 * index)}`}
						fill="transparent"
					/>
				</g>
			))
		}
	</svg>
);

export default Atom;