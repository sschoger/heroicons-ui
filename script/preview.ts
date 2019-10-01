import * as fs from 'fs';
import * as path from 'path';
import { Icon } from "./models/icons";
// import { toTitleCase, createScreenshot } from './helper';
import * as helper from './helper';

const htmlDoctype = `<!DOCTYPE html>`;
const cssFilePath = path.join('style.css');
const styling = `<link rel="stylesheet" href="${cssFilePath}">`;
const title = `<title>Heroicons UI</title>`;

const createHTMLTableHeadRow = (amount: number) => {
    const pair = `
        <th class="icon">Icon</th>
        <th class="iconName">Name</th>
    `;
    const columns = [...Array(amount)].map(() => pair).join('');
    return `
        <tr>
            ${columns}
        </tr>
    `;
};

const createHTMLTableBodyRows = (items: Icon[][]) => {
    let rows = '';
    items.forEach(row => {
        const columns = row.map(icon => `
            <td class="icon">
                <img src="../svg/${icon.name}.svg" alt="${icon.name}.svg">
            </td>
            <td class="iconName">${helper.toTitleCase(icon.name)}.svg</td>
        `).join('');
        const tableRow = `
            <tr>
                ${columns}
            </tr>
        `;
        rows = rows + tableRow;
    });
    return rows;
};

const createHTMLTable = (headRow, bodyRows) => `
    <table>
        ${headRow}
        ${bodyRows}
    </table>
`;

const createPreviewTable = (icons: Icon[][], size: number) => {
    const table = htmlDoctype + styling + title + createHTMLTable(
        createHTMLTableHeadRow(size),
        createHTMLTableBodyRows(icons)
    );
    return table;
};

const savePreview = (fileName: string, size: number, icons: Icon[][]) => {
    const filePath = path.join(__dirname, 'index.html');

    // write the html file with the icon table
    fs.writeFileSync(filePath, createPreviewTable(icons, size));

    // create the image
    helper.createScreenshot(filePath, fileName).then(() => {
        console.log('> Heroicon UI:', helper.green(`Successfully created ${fileName} preview image!`));
    }).catch(() => {
        throw Error(helper.red(`Error while creating ${fileName} preview image`));
    });
};

const getIconDefinitionsMatrix = (icons: Icon[], size: number): Icon[][] => {
	const iconList = icons.sort((a, b) => a.name.localeCompare(b.name));

	// list for the columns with the icons
	const matrix: Icon[][] = [];

	// calculate the amount of icons per column
	const itemsPerColumn = Math.floor(iconList.length / size);

	// create the columns with the icons
	let counter = 0;
	for (let c = 0; c < itemsPerColumn; c++) {
		matrix[c] = [];
	}
	for (let s = 0; s < size; s++) {
		for (let i = 0; i < itemsPerColumn; i++) {
			matrix[i][s] = iconList[counter];
			counter++;
		}
	}

	return matrix;
};

/**
 * Function that generates the preview image for specific icons.
 * @param name name of the preview
 * @param icons icons for the preview
 * @param size amount of table columns
 * @param excluded which icons shall be excluded
 */
export const generatePreview = (name: string, icons: Icon[], size: number) => {
	savePreview(name, size, getIconDefinitionsMatrix(icons, size));
};
