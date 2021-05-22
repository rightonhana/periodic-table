import ElementData from "../types/ElementData";
import States from "../enums/States";
import AcidBaseProperties from "../enums/AcidBaseProperties";
import CrystalStructures from "../enums/CrystalStructures";

export const cadmium: ElementData = {
	acidBaseProperties: AcidBaseProperties.BASE,
	atomicMass: 112.411,
	atomicNumber: 48,
	boilingTemperature: 765,
	commonOxidationStates: [2],
	crystalStructure: CrystalStructures.HCP,
	electronConfiguration: "[Kr] 5s2 4d10",
	electronsPerShell: [2, 8, 18, 18, 2],
	fusionTemperature: 320.9,
	group: 12,
	metalMetalloidNonmetal: "post-​transition metal",
	name: "cadmium",
	period: 5,
	special: false,
	state: States.SOLID,
	symbol: "Cd"
};

export default cadmium;