import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const chromium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 51.9961,
	atomicNumber: 24,
	boilingTemperature: 2672,
	commonOxidationStates: [2, 3, 6],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Ar] 4s2 3d5",
	electronsPerShell: [2, 8, 13, 1],
	fusionTemperature: 1857,
	group: 6,
	metalMetalloidNonmetal: "transition metal",
	name: "chromium",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "Cr"
};

export default chromium;