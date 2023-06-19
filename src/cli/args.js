import { argv } from 'node:process';
// node args.js --propName value --prop2Name value2
const parseArgs = () => {
    // Write your code here 
    const IS = ' is ';
    const COMMAND = '--';
    const COMMA = ', ';
    let output = '';
    for (let i = 0; i < argv.length; i++) {
        if (argv[i].indexOf(COMMAND) == 0)
            output += COMMA + argv[i] + IS + argv[++i];
    }
    console.log(output.slice(2));
};

parseArgs();