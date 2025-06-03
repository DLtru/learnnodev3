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

let currentUrl = "https://explosm.net/comics/latest";
const comics = [];

for (let i = 0; i < 10; i++) {
    const cacheName = md5(currentUrl);

    let data = cacheGet(cacheName);
    if (!data) {
        await sleep(1500);
        console.log('!!!!! LIVE DATA - Cyanide & Happiness', currentUrl);
        try {
            let res = await axios.get(currentUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0'
                }
            });
            data = res.data;
            cacheSet(cacheName, data);
        } catch (error) {
            console.error(`Error fetching Cyanide & Happiness at ${currentUrl}:`, error.message);
            break;
        }
    }

    try {
        const $ = cheerio.load(data);
        const imgUrl = $('#main-comic').attr('src');
        const title = $('.comic-title').text().trim() || 'Cyanide & Happiness';
        const date = $('.author-credit').next().text().trim();
        comics.push({
            date,
            title,
            imgUrl: imgUrl ? 'https:' + imgUrl : null,
            sourceUrl: currentUrl
        });
        console.log(`[C&H] ${date} - ${title}`);
        console.log(`  Image: ${imgUrl}`);

        // Переход к предыдущему комиксу
        const prevLink = $('a#previous-comic').attr('href');
        if (prevLink) {
            currentUrl = "https://explosm.net" + prevLink;
        } else {
            console.log('No previous link found, stopping');
            break;
        }
    } catch (error) {
        console.error(`Error parsing Cyanide & Happiness at ${currentUrl}:`, error.message);
        break;
    }
}

fs.writeFileSync('cyanide_happiness_comics.json', JSON.stringify(comics, null, 2));
console.log(`Saved ${comics.length} Cyanide & Happiness comics to cyanide_happiness_comics.json`);