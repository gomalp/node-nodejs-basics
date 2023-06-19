import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'path';
import url from 'url';

const decompress = async () => {
    // Write your code here 
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const PATH = __dirname + '/files/';

    const gzip = createUnzip();
    const source = createReadStream(PATH + 'archive.gz');
    const destination = createWriteStream(PATH + 'fileToCompress.txt');

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await decompress();