import {FC} from "react";
import CategoryColors from "../../enums/CategoryColors";
import ElementCategories from "../../enums/ElementCategories";
import styles from "./Navigation.module.css";
import NavigationProps from "./NavigationProps";

export const Navigation: FC<NavigationProps> = ({ extendedPT, onExtendedPTClick, onNavClick, ...props}) => {
	var style = {
		"--actinide": CategoryColors.ACTINIDE,
		"--alkali-metal": CategoryColors.ALKALI_METAL,
		"--lanthanide": CategoryColors.LANTHANIDE,
		"--metalloid": CategoryColors.METALLOID,
		"--noble-gas": CategoryColors.NOBLE_GAS,
		"--post-transition-metal": CategoryColors.POST_TRANSITION_METAL,
		"--reactive-nonmetal": CategoryColors.REACTIVE_NONMETAL,
		"--transition-metal": CategoryColors.TRANSITION_METAL,
		"--unknown": CategoryColors.UNKNOWN
	} as React.CSSProperties;
	return (
		<nav style={style} className={styles.Navigation} {...props}>
			<ul>
				<button className={extendedPT ? styles.EPTButton : ""} onClick={onExtendedPTClick}>Extended Periodic Table</button>
			</ul>
			<ul>
				<button className={styles.Actinide} onClick={onNavClick(ElementCategories.ACTINIDE)}>Actinide</button>
				<button className={styles.AlkaliMetal} onClick={onNavClick(ElementCategories.ALKALI_METAL)}>Alkali Metal</button>
				<button className={styles.AlkalineEarthMetal} onClick={onNavClick(ElementCategories.ALKALINE_EARTH_METAL)}>Alkaline Earth Metal</button>
				<button className={styles.Lanthanide} onClick={onNavClick(ElementCategories.LANTHANIDE)}>Lan­thanide</button>
				<button className={styles.Metalloid} onClick={onNavClick(ElementCategories.METALLOID)}>Metalloid</button>
				<button className={styles.NobleGas} onClick={onNavClick(ElementCategories.NOBLE_GAS)}>Noble Gas</button>
				<button className={styles.PostTransitionMetal} onClick={onNavClick(ElementCategories.POST_TRANSITION_METAL)}>Post Transition Metal</button>
				<button className={styles.ReactiveNonmetal} onClick={onNavClick(ElementCategories.REACTIVE_NONMETAL)}>Reactive Nonmetal</button>
				<button className={styles.TransitionMetal} onClick={onNavClick(ElementCategories.TRANSITION_METAL)}>TransitionMetal</button>
				<button className={styles.Unknown} onClick={onNavClick(ElementCategories.UNKNOWN)}>Unknown</button>
			</ul>
		</nav>
	);
}

export default Navigation;