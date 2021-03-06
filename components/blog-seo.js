import { NextSeo, ArticleJsonLd } from "next-seo";

const BlogSeo = ({ title, summary, publishDate, url, image }) => {
  const date = new Date(publishDate).toISOString();
  const featuredImage = {
    url: `https://danielwirtz.com${image}`,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={`${title} – Daniel Wirtz`}
        description={summary}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName="Daniel Wirtz"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Daniel Wirtz"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
