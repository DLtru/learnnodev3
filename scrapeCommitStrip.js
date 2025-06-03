import axios from "axios";
import * as cheerio from 'cheerio';
import fs from 'fs';
import md5 from "md5";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

if (!fs.existsSync('cache')) {
    fs.mkdirSync('cache');
}

const cacheGet = name => {
    if (fs.existsSync('cache/' + name + '.html')) {
        return fs.readFileSync('cache/' + name + '.html');
    }
    return false;
};

const cacheSet = (name, value) => {
    fs.writeFileSync('cache/' + name + '.html', value);
};

let currentUrl = 'https://www.commitstrip.com/en/';
const comics = [];

for (let i = 0; i < 10; i++) {
    const cacheName = md5(currentUrl);

    let data = cacheGet(cacheName);
    if (!data) {
        await sleep(1500);
        console.log('!!!!! LIVE DATA - CommitStrip', currentUrl);
        try {
            let res = await axios.get(currentUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0'
                }
            });
            data = res.data;
            cacheSet(cacheName, data);
        } catch (error) {
            console.error(`Error fetching CommitStrip at ${currentUrl}:`, error.message);
            break;
        }
    }

    try {
        const $ = cheerio.load(data);
        const strip = $('.excerpt').first();
        const img = strip.find('.excerpt-img img');
        const imgUrl = img.attr('src');
        const title = strip.find('.excerpt-title').text().trim();
        const link = strip.find('.excerpt-title a').attr('href');
        const date = strip.find('time').attr('datetime') || '';
        comics.push({
            date,
            title,
            imgUrl,
            sourceUrl: link
        });
        console.log(`[CommitStrip] ${date} - ${title}`);
        console.log(`  Image: ${imgUrl}`);
        const next = $('.nav-previous a').attr('href');
        if (next) {
            currentUrl = next;
        } else {
            console.log('No previous link found, stopping');
            break;
        }
    } catch (error) {
        console.error(`Error parsing CommitStrip at ${currentUrl}:`, error.message);
        break;
    }
}

fs.writeFileSync('commitstrip_comics.json', JSON.stringify(comics, null, 2));
console.log(`Saved ${comics.length} CommitStrip comics to commitstrip_comics.json`);