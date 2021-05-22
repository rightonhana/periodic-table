import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const tantalum: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 180.9479,
	atomicNumber: 73,
	boilingTemperature: 5425,
	commonOxidationStates: [5],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Xe] 6s2 4f14 5d3",
	electronsPerShell: [2, 8, 18, 32, 11, 2],
	fusionTemperature: 2996,
	group: 5,
	metalMetalloidNonmetal: "transition metal",
	name: "tantalum",
	period: 6,
	special: false,
	state: States.SOLID,
	symbol: "Ta",
};

export default tantalum;