// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require ("fs");
const text = "Hello, This is Khizar Qamar";

fs.writeFile("b.txt", text, "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log ("data write succesfully!");
    }
})