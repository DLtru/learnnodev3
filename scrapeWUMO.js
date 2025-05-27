import axios from "axios";
import * as cheerio from 'cheerio';
import fs from 'fs';
import md5 from "md5";
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

let url = 'https://wumo.com/wumo';
for(let i = 0; i<10; i++){
    let data = cacheGet(md5(url));
    if(!data){
        await sleep(1000);
        console.log('!!!!! LIVE DATA');
        let res = await axios.get(url);
        data = res.data;
        cacheSet(md5(url), data);
    }
    const $ = cheerio.load(data);
    let img = $('article.wumo .box-content img');
    console.log(img.attr('src'), img.attr('alt'));
    let prev = $('article.wumo a.prev');
    url = 'https://wumo.com' + prev.attr('href');
    console.log(url);
}