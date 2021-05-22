import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const antimony: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 121.75,
	atomicNumber: 51,
	boilingTemperature: 1635,
	commonOxidationStates: [-3, 3, 5],
	crystalStructure: CrystalStructures.RHO,
	electronConfiguration: "[Kr] 5s2 4d10 5p3",
	electronsPerShell: [2, 8, 18, 18, 5],
	fusionTemperature: 630.74,
	group: 15,
	metalMetalloidNonmetal: "metalloid",
	name: "antimony",
	period: 5,
	special: false,
	state: States.SOLID,
	symbol: "Sb"
};

export default antimony;