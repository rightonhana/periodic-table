import ElementData from "../types/ElementData";
import States from "../enums/States";
import CrystalStructures from "../enums/CrystalStructures";
import AcidBaseProperties from "../enums/AcidBaseProperties";

export const phosphorus: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 30.973762,
	atomicNumber: 15,
	boilingTemperature: 280,
	commonOxidationStates: [-3, 3, 5],
	crystalStructure: CrystalStructures.ORTH,
	electronConfiguration: "[Ne] 3s2 3p3",
	fusionTemperature: 44.1,
	group: 15,
	metalMetalloidNonmetal: "reactive nonmetal",
	name: "phosphorus",
	period: 3,
	special: false,
	state: States.SOLID,
	symbol: "P"
};

export default phosphorus;