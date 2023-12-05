const fs = require('fs');
const path = require('path');

function createFolderStructure(dir, outputFilePath) {
  // Create a write stream to the output file
  const outputStream = fs.createWriteStream(outputFilePath);

  // Recursive function to traverse the directory
  function traverseDirectory(currentDir, indent = '') {
    const files = fs.readdirSync(currentDir);

    files.forEach((file) => {
      if (file !== '.git') {
        const filePath = path.join(currentDir, file);
        const isDirectory = fs.statSync(filePath).isDirectory();

        // Check if the file has a ".gitignore" extension
        const isGitIgnore = file.toLowerCase() === '.gitignore';

        // Output the current file or folder
        outputStream.write(`${indent}${isDirectory ? '[Folder]' : ''} ${file}${isGitIgnore ? ' [GitIgnore]' : ''}\n`);

        // If it's a directory, recursively traverse it
        if (isDirectory) {
          traverseDirectory(filePath, `${indent}  `);
        }
      }
    });
  }

  // Start traversing the directory
  traverseDirectory(dir);

  // Close the write stream
  outputStream.end();
}

// Example usage: Specify the directory path and output file path
const directoryPath = './';
const outputFile = 'folder_structure.txt';

createFolderStructure(directoryPath, outputFile);
console.log(`Folder structure has been written to ${outputFile}`);
