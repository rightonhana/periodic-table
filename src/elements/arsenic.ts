import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const arsenic: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 74.92159,
	atomicNumber: 33,
	boilingTemperature: 613,
	commonOxidationStates: [-3, 3, 5],
	crystalStructure: CrystalStructures.RHO,
	electronConfiguration: "[Ar] 4s2 3d10 4p3",
	fusionTemperature: 817,
	group: 15,
	metalMetalloidNonmetal: "metalloid",
	name: "arsenic",
	period: 4,
	special: false,
	state: States.SOLID,
	symbol: "As"
};

export default arsenic;