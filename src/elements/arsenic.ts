import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const arsenic: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 74.92159,
	atomicNumber: 33,
	boilingTemperature: 613,
	commonOxidationStates: [-3, 3, 5],
	crystalStructure: CrystalStructures.RHO,
	electronConfiguration: "[Ar] 4s2 3d10 4p3",
	electronsPerShell: [2, 8, 18, 5],
	fusionTemperature: 817,
	group: 15,
	elementCategory: ElementCategories.METALLOID,
	name: "arsenic",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "As"
};

export default arsenic;