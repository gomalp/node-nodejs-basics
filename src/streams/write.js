import { createReadStream, createWriteStream } from 'node:fs';
import { stdin } from 'node:process';
import path from 'path';
import url from 'url';
const write = async () => {
    // Write your code here 
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const DIR = __dirname + '/';
    const input = createReadStream(stdin);
    const output = createWriteStream(DIR + '/files/fileToWrite.txt');
    input.pipe(output);
};

await write();