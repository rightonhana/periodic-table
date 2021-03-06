import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const astatine: ElementData = {
	acidBaseProperties: AcidBaseProperties.UNKNOWN,
	atomicMass: 210,
	atomicNumber: 85,
	boilingTemperature: 337,
	commonOxidationStates: [-1, 1, 3, 5, 7],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Xe] 6s2 4f14 5d10 6p5",
	electronsPerShell: [2, 8, 18, 32, 18, 7],
	fusionTemperature: 302,
	group: 17,
	elementCategory: ElementCategories.METALLOID,
	name: "astatine",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "At"
};

export default astatine;