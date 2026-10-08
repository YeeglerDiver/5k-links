const fs = require('fs');

const totalLinks = 5000;
const data = [];

for (let i = 1; i <= totalLinks; i++) {
  data.push({
    slug: `link-${i}`,
    url: `https://example.com/page/${i}`
  });
}

fs.writeFileSync('links.json', JSON.stringify(data, null, 2));
console.log('Successfully generated links.json with 5,000 entries.');
