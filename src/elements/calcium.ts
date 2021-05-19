import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const calcium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 4.078,
	atomicNumber: 20,
	boilingTemperature: 1484,
	commonOxidationStates: [2],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Ar] 4s2",
	fusionTemperature: 839,
	group: 2,
	metalMetalloidNonmetal: "alkaline earth metal",
	name: "calcium",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "Ca"
};

export default calcium;