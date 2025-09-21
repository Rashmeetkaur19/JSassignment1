// Import the file system module
const fs = require('node:fs');

// Non-blocking way to read file content
fs.readFile('./content.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return; // stop if error happens
    }

    // Print file contents to terminal
    console.log("File contents:\n");
    console.log(data);
});
