import axios from "axios";
import * as cheerio from 'cheerio';
import fs from 'fs';
const sleep = function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

if(!fs.existsSync('cache')){
    fs.mkdirSync('cache');
}

const cacheGet = (name) => {
    if(fs.existsSync('cache/' + name + '.html')){
        return fs.readFileSync('cache/' + name + '.html');
    } 
    return false;
}

const cacheSet = (name, value) => {
   fs.writeFileSync('cache/' + name + '.html', value);
}

for(let i = 3088; i>3078; i--){
    let data = cacheGet(i)
    if(!data){
        await sleep(1000);
        console.log('!!!!! LIVE DATA');
        let res = await axios.get(`https://xkcd.com/${i}/`);
        data = res.data;
        cacheSet(i, data);
    }
    const $ = cheerio.load(data);
    let src = $('#comic img').attr('src');
    let title = $('#comic img').attr('alt');
    let text = $('#comic img').attr('title');
    console.log(src, title, text);
}