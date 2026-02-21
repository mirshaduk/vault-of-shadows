const https = require('https');

const topics = [
    'Assassination_of_Julius_Caesar',
    'Roman_Forum',
    'Napoleon',
    'Trench_warfare',
    'Operation_Barbarossa',
    'Battle_of_Berlin',
    'Great_Purge',
    'Berlin_Wall',
    'Dissolution_of_the_Soviet_Union',
    'Reign_of_Terror',
    'Wall_Street_Crash_of_1929',
    'Kristallnacht',
    'Assassination_of_Archduke_Franz_Ferdinand'
];

async function getImageUrl(title) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=1000`;
    return new Promise((resolve) => {
        https.get(url, { headers: { 'User-Agent': 'VaultOfShadows/1.0 (test@example.com)' } }, (res) => {
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
    for (const topic of topics) {
        const img = await getImageUrl(topic);
        console.log(topic + ': ' + img);
    }
}
run();
