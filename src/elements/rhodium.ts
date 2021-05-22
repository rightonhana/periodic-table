import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const rhodium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID_BASE,
	atomicMass: 102.90550,
	atomicNumber: 45,
	boilingTemperature: 3727,
	commonOxidationStates: [2, 3, 4],
	crystalStructure: CrystalStructures.FCC,
	electronConfiguration: "[Kr] 5s2 4d7",
	electronsPerShell: [2, 8, 18, 16, 1],
	fusionTemperature: 1965,
	group: 9,
	metalMetalloidNonmetal: "transition metal",
	name: "rhodium",
	period: 5,
	special: false,
	state: States.SOLID,
	symbol: "Rh"
};

export default rhodium;