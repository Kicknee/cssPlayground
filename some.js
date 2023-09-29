const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter value: ", input =>{
    console.log(input);
    readline.close();
});