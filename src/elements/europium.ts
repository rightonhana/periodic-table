import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import ElementCategories from "../enums/ElementCategories";

export const europium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 151.965,
	atomicNumber: 63,
	boilingTemperature: 1597,
	commonOxidationStates: [2, 3],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Xe] 6s2 4f7",
	electronsPerShell: [2, 8, 18, 25, 8, 2],
	fusionTemperature: 822,
	group: "3 VI",
	elementCategory: ElementCategories.LANTHANIDE,
	name: "europium",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Eu"
};

export default europium;