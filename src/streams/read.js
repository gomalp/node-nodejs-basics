import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import path from 'path';
import url from 'url';

const read = async () => {
    // Write your code here 
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const DIR = __dirname + '/';
    const input = createReadStream(DIR + '/files/fileToRead.txt');
    input.pipe(stdout);
};

await read();