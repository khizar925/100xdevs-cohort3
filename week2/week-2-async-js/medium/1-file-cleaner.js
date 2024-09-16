const fs = require('fs');

// Read the file
fs.readFile('a.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Remove extra spaces
  const cleanedData = data.replace(/\s+/g, ' ').trim();

  // Write the cleaned data back to the same file
  fs.writeFile('a.txt', cleanedData, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("File cleaned and saved successfully.");
    }
  });
});
