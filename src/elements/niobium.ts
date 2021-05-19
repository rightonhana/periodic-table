import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const niobium: ElementData = {
	acidBaseProperties: AcidBaseProperties.ACID,
	atomicMass: 92.90638,
	atomicNumber: 41,
	boilingTemperature: 4742,
	commonOxidationStates: [3, 5],
	crystalStructure: CrystalStructures.BCC,
	electronConfiguration: "[Kr] 5s2 4d3",
	fusionTemperature: 2468,
	group: 5,
	metalMetalloidNonmetal: "transition metal",
	name: "niobium",
	period: 5,
	special: false,
	state: States.SOLID,
	symbol: "Nb"
};

export default niobium;