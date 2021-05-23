import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";
import ElementCategories from "../enums/ElementCategories";

export const calcium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 4.078,
	atomicNumber: 20,
	boilingTemperature: 1484,
	commonOxidationStates: [2],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Ar] 4s2",
	electronsPerShell: [2, 8, 8, 2],
	fusionTemperature: 839,
	group: 2,
	elementCategory: ElementCategories.ALKALINE_EARTH_METAL,
	name: "calcium",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "Ca"
};

export default calcium;