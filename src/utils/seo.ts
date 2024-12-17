export const defaultSEO = {
  title: 'Gajraj Ventures - Digital Innovation & Technology Solutions',
  description: 'Transform your business with cutting-edge digital solutions. Web development, mobile apps, UI/UX design, and digital marketing services by Gajraj Ventures.',
  keywords: 'digital solutions, web development, mobile apps, UI/UX design, digital marketing, technology consulting',
  ogImage: '/og-image.jpg',
  twitterHandle: '@gajrajventures',
  siteUrl: 'https://gajrajventures.com'
};

export const generateMetaTags = (customSEO = {}) => {
  const seo = { ...defaultSEO, ...customSEO };
  return {
    title: seo.title,
    meta: [
      { name: 'description', content: seo.description },
      { name: 'keywords', content: seo.keywords },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:image', content: seo.ogImage },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: seo.twitterHandle },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description },
      { name: 'twitter:image', content: seo.ogImage }
    ]
  };
};