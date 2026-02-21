const fs = require('fs');
const https = require('https');

const topics = [
    'Renaissance',
    'Age_of_Enlightenment',
    'Scientific_Revolution',
    'American_Revolutionary_War',
    'French_Revolution',
    'Industrial_Revolution',
    'First_French_Empire',
    'Rise_of_nationalism_in_Europe',
    'World_War_I',
    'Russian_Revolution',
    'League_of_Nations',
    'Fascism',
    'Great_Depression',
    'World_War_II',
    'United_Nations',
    'Decolonization',
    'Cold_War',
    'Non-Aligned_Movement',
    'Globalization'
];

async function getImageUrl(title) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=1000`;
    return new Promise((resolve) => {
        https.get(url, { headers: { 'User-Agent': 'VaultOfShadows/2.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    const pages = json.query.pages;
                    const pageId = Object.keys(pages)[0];
                    resolve(pages[pageId].thumbnail ? pages[pageId].thumbnail.source : 'NO_IMAGE');
                } catch (e) { resolve('ERROR'); }
            });
        }).on('error', () => resolve('ERROR'));
    });
}

async function run() {
    let out = '';
    for (const topic of topics) {
        const img = await getImageUrl(topic);
        console.log(topic + ': ' + img);
        out += topic + ': ' + img + '\n';
    }
    fs.writeFileSync('new_urls.txt', out, 'utf8');
}
run();
