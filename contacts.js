const fs = require("fs/promises");

fs.readFile('db/contacts.json', 'utf-8')
.then(data => console.log(data))

