const fs = require('fs');

let content = fs.readFileSync('src/lib/episodes.ts', 'utf8');

const replacements = [
    // Season 1: Rome
    { match: /https:\/\/images\.unsplash\.com\/photo-1566393028639[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Vincenzo_Camuccini_-_La_morte_di_Cesare.jpg/1280px-Vincenzo_Camuccini_-_La_morte_di_Cesare.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1548625361[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Foro_Romano_Musei_Capitolini_Roma.jpg/1280px-Foro_Romano_Musei_Capitolini_Roma.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1598970434795[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Foro_Romano_Musei_Capitolini_Roma.jpg/1280px-Foro_Romano_Musei_Capitolini_Roma.jpg' },

    // Conquerors: Napoleon
    { match: /https:\/\/images\.unsplash\.com\/photo-1579548122080[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/1280px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1622322692013[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/1280px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1533154817105[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/1280px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg' },

    // Season 2: Great War
    { match: /https:\/\/images\.unsplash\.com\/photo-1564396322457[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/DC-1914-27-d-Sarajevo-cropped.jpg/1280px-DC-1914-27-d-Sarajevo-cropped.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1582214693895[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/DC-1914-27-d-Sarajevo-cropped.jpg/1280px-DC-1914-27-d-Sarajevo-cropped.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1498083833290[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/DC-1914-27-d-Sarajevo-cropped.jpg/1280px-DC-1914-27-d-Sarajevo-cropped.jpg' },

    { match: /https:\/\/images\.unsplash\.com\/photo-1608889175123[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Aerial_Photography_on_the_Western_Front%2C_1916._HU100394.jpg/1280px-Aerial_Photography_on_the_Western_Front%2C_1916._HU100394.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1542618991[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Aerial_Photography_on_the_Western_Front%2C_1916._HU100394.jpg/1280px-Aerial_Photography_on_the_Western_Front%2C_1916._HU100394.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1582213782179[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Aerial_Photography_on_the_Western_Front%2C_1916._HU100394.jpg/1280px-Aerial_Photography_on_the_Western_Front%2C_1916._HU100394.jpg' },

    // Barbarossa
    { match: /https:\/\/images\.unsplash\.com\/photo-1520975918318[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Operation_Barbarossa_collage.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1486485857945[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Operation_Barbarossa_collage.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1605333100366[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Operation_Barbarossa_collage.jpg' },

    // Berlin Fall
    { match: /https:\/\/images\.unsplash\.com\/photo-1549893074[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Raising_a_flag_over_the_Reichstag_-_Restoration.jpg/1280px-Raising_a_flag_over_the_Reichstag_-_Restoration.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1506544777[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Raising_a_flag_over_the_Reichstag_-_Restoration.jpg/1280px-Raising_a_flag_over_the_Reichstag_-_Restoration.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1563223783[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Raising_a_flag_over_the_Reichstag_-_Restoration.jpg/1280px-Raising_a_flag_over_the_Reichstag_-_Restoration.jpg' },

    // Great Purge
    { match: /https:\/\/images\.unsplash\.com\/photo-1520975922284[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Vinnycia16.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1517524008697[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Vinnycia16.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1584483733074[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Vinnycia16.jpg' },

    // Berlin Wall
    { match: /https:\/\/images\.unsplash\.com\/photo-1541849546[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Berlinermauer.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1627932624328[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Berlinermauer.jpg' },

    // Soviet Union
    { match: /https:\/\/images\.unsplash\.com\/photo-1554072675[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/1730_map_of_the_Russian_Empire_by_Philipp_Johann_Strahlenberg.jpg/1280px-1730_map_of_the_Russian_Empire_by_Philipp_Johann_Strahlenberg.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1579532537598[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/1730_map_of_the_Russian_Empire_by_Philipp_Johann_Strahlenberg.jpg/1280px-1730_map_of_the_Russian_Empire_by_Philipp_Johann_Strahlenberg.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1580131494544[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/1730_map_of_the_Russian_Empire_by_Philipp_Johann_Strahlenberg.jpg/1280px-1730_map_of_the_Russian_Empire_by_Philipp_Johann_Strahlenberg.jpg' },

    // Reign of Terror
    { match: /https:\/\/images\.unsplash\.com\/photo-1543362145[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Octobre_1793%2C_supplice_de_9_%C3%A9migr%C3%A9s.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1502602898657[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Octobre_1793%2C_supplice_de_9_%C3%A9migr%C3%A9s.jpg' },

    // Great Depression
    { match: /https:\/\/images\.unsplash\.com\/photo-1508385082359[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Menge_in_der_Wall_Street_vor_dem_Geb%C3%A4ude_der_New_Yorker_B%C3%B6rse_%28NY_Stock_Exchange%29_nach_deren_Zusammenbruchs_1929.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1595152772835[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Menge_in_der_Wall_Street_vor_dem_Geb%C3%A4ude_der_New_Yorker_B%C3%B6rse_%28NY_Stock_Exchange%29_nach_deren_Zusammenbruchs_1929.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1520101242385[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Menge_in_der_Wall_Street_vor_dem_Geb%C3%A4ude_der_New_Yorker_B%C3%B6rse_%28NY_Stock_Exchange%29_nach_deren_Zusammenbruchs_1929.jpg' },

    // Kristallnacht
    { match: /https:\/\/images\.unsplash\.com\/photo-1581091870627[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Interior_view_of_the_destroyed_Fasanenstrasse_Synagogue%2C_Berlin.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1533227260828[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Interior_view_of_the_destroyed_Fasanenstrasse_Synagogue%2C_Berlin.jpg' },
    { match: /https:\/\/images\.unsplash\.com\/photo-1558904541[^"]+/g, replace: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Interior_view_of_the_destroyed_Fasanenstrasse_Synagogue%2C_Berlin.jpg' },
];

let replaced = 0;
for (const rep of replacements) {
    if (content.match(rep.match)) {
        content = content.replace(rep.match, rep.replace);
        replaced++;
    }
}
// Blanket catch-all to replace any remaining unsplash links
content = content.replace(/https:\/\/images\.unsplash\.com[^\s"']+/g, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Foro_Romano_Musei_Capitolini_Roma.jpg/1280px-Foro_Romano_Musei_Capitolini_Roma.jpg');

fs.writeFileSync('src/lib/episodes.ts', content, 'utf8');
console.log('Replaced images successfully.');
