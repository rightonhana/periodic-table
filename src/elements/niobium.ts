import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const niobium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 92.90638,
	atomicNumber: 41,
	boilingTemperature: 4742,
	commonOxidationStates: [3, 5],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Kr] 5s2 4d3",
	electronsPerShell: [2, 8, 18, 12, 1],
	fusionTemperature: 2468,
	group: 5,
	elementCategory: ElementCategories.TRANSITION_METAL,
	name: "niobium",
	period: 5,
	special: false,
	state: States.SOLID,
	symbol: "Nb"
};

export default niobium;