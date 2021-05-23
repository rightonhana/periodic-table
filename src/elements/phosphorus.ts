import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const phosphorus: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 30.973762,
	atomicNumber: 15,
	boilingTemperature: 280,
	commonOxidationStates: [-3, 3, 5],
	crystalStructure: CrystalStructures.ORTH,
	electronConfiguration: "[Ne] 3s2 3p3",
	electronsPerShell: [2, 8, 5],
	fusionTemperature: 44.1,
	group: 15,
	elementCategory: ElementCategories.REACTIVE_NONMETAL,
	name: "phosphorus",
	period: 3,
	special: false,
	state: States.SOLID,
	symbol: "P"
};

export default phosphorus;