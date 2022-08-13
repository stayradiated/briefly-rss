const formatContainer = (children: string[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atomic="http://atomicpublishing.com/rss/1.0/" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:spotify="http://www.spotify.com/ns/rss">
  <channel>
    <title>Briefly</title>
    <link>https://brieflyapp.com</link>
    <description>How was your day?</description>
    <language>en-us</language>
    <pubDate>Thu, 21 Jul 2022 13:26:55 +0000</pubDate>
    <category>Friends</category>
    <ttl>60</ttl>
    <image>
      <url>https://brieflyapp.com/assets/images/appicon.png</url>
      <title>Briefly</title>
      <link>https://brieflyapp.com</link>
    </image>
    ${children.join("\n")}
  </channel>
</rss>`;
};

type Item = {
  title: string;
  description: string;
  author: string;
  url: string;
  size: string;
  date: string;
  image: string;
};

const formatItem = (options: Item) => {
  const { title, description, author, url, size, date, image } = options;

  return `<item>
      <title>${title}</title>
      <description>${description}</description>
      <author>${author}</author>
      <enclosure url="${url}" length="${size}" type="audio/mpeg"></enclosure>
      <pubDate>${date}</pubDate>
      <itunes:image href="${image}"/>
    </item>`;
};

export { formatItem, formatContainer };
