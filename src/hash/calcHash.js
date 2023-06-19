import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import path from 'path';
import url from 'url';


const calculateHash = async () => {
    // Write your code here 
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const DIR = __dirname + '/';
    const { createHash } = await import('node:crypto');
    const hash = createHash('sha256');
    const input = createReadStream(DIR + '/files/fileToCalculateHashFor.txt');
    input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();