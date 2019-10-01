import * as path from "path";
import * as puppeteer from "puppeteer";

/**
 * Create a screenshot from an HTML file and save it as image.
 * @param filePath Path of an HTML file
 * @param fileName Name of the output image
 */
export const createScreenshot = async (filePath: string, fileName: string) => {
	try {
		const htmlFilePath = path.join("file:", filePath);
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.setViewport({
			height: 10,
			width: 1000
		});

		await page.goto(htmlFilePath);

		await page.screenshot({
			path: `${fileName}.png`,
			omitBackground: true,
			fullPage: true
		});

		await browser.close();
	} catch (error) {
		console.error(error);
		throw Error(error);
	}
};

/** TitleCase all words in a string */
export const toTitleCase = (str: string): string => {
	return str.replace(
		/\w\S*/g,
		txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	);
};

// colored console output

export const red = (value: string) => `\x1b[31m${value}\x1b[0m`;
export const green = (value: string) => `\x1b[32m${value}\x1b[0m`;
export const yellow = (value: string) => `\x1b[33m${value}\x1b[0m`;
