import * as fs from "fs";
import { Icon } from "./models/icons";
import { generatePreview } from "./preview";

const iconsFolder = "./svg/";
const icons: Icon[] = [];

fs.readdirSync(iconsFolder).forEach(file => {
	icons.push({
		name: file.split(".")[0],
		fileExtension: file.split(".")[1]
	});
});

generatePreview("heroIcons", icons, 4);
