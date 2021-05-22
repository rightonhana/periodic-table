import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const yttrium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 88.90585,
	atomicNumber: 39,
	boilingTemperature: 3338,
	commonOxidationStates: [3],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Kr] 5s2 4d1",
	electronsPerShell: [2, 8, 18, 9, 2],
	fusionTemperature: 1522,
	group: 3,
	metalMetalloidNonmetal: "transition metal",
	name: "yttrium",
	period: 5,
	special: false,
	state: States.SOLID,
	symbol: "Y"
};

export default yttrium;