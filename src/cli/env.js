import { env } from 'node:process';
const parseEnv = () => {
    // Write your code here
    const PREFIX = 'RSS_';
    const EQUAL = '=';
    const SEMICOLON = '; ';
    let output = '';
    for (let key in env) {
        if (key.indexOf(PREFIX) != -1)
            output += SEMICOLON + key + EQUAL + env[key];
    }
    console.log(output.slice(2));
};

env.RSS_news = 123;
env.RSS_port = 8000;
env.RSS_name = 'node';
parseEnv();