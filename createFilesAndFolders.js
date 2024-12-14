const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const prompt = require('prompt-sync')();
const os = require('os');

// Function to create directories and files based on parsed data
function createStructure(baseDir, data) {
	Object.entries(data).forEach(([folderName, contents]) => {
		const dirPath = path.join(baseDir, folderName);

		if (!fs.existsSync(dirPath)) {
			fs.mkdirSync(dirPath, { recursive: true });
		}

		Object.entries(contents).forEach(([fileName, content]) => {
			const filePath = path.join(dirPath, fileName);
			fs.writeFileSync(filePath, content || '');
			console.log(`Created ${filePath}`);
		});
	});
}

// Function to zip specified directory containing created structures
function zipDirectory(sourceDir) {
	const outputZipFileName = `${sourceDir}.zip`;

	const outputStream = fs.createWriteStream(outputZipFileName);
	const archive = archiver('zip');

	outputStream.on('close', function () {
		console.log(`Created ${outputZipFileName} (${archive.pointer()} total bytes)`);
		console.log('Archiving has been finalized.');
	});

	archive.on('error', function (err) { throw err; });

	archive.pipe(outputStream);

	// Only include contents of base directory (exclude everything else)
	archive.directory(sourceDir + '/', false);

	archive.finalize();

	return outputZipFileName;
}

// Main function that orchestrates parsing input and creating structure
function run() {

	let documentsFolder = path.join(os.homedir(), 'Documents'); // Get user's Documents folder 

	let timestamp = new Date().toISOString().replace(/[-:.]/g, ''); // Generate unique timestamp string 

	let baseFolder = path.join(documentsFolder, 'NewProject_' + timestamp); // Define root folder name here 

	if (!fs.existsSync(baseFolder)) {
		fs.mkdirSync(baseFolder);
	}

	console.log("Enter your directory/file structure as a valid JSON:");
	let jsonString = "";
	while (true) {
		let line = prompt("");
		if (line.trim() === "") break;
		jsonString += line;
	}

	try {
		let jsonData = JSON.parse(jsonString);

		createStructure(baseFolder, jsonData);

		let zippedOutput = zipDirectory(baseFolder);

		console.log(`Your zipped project is available at :${zippedOutput}`);

	} catch (e) {
		console.error("Invalid JSON format! Please try again.");
	}
}

module.exports = run;
