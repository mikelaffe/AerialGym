import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export default function SEO({
  title = 'Acrogym - Professional Aerial Arts Training & Performances',
  description = 'Master aerial acrobatics with expert instruction in Aerial Hammock, Aerial Hoop, Gymnastics, and Flexibility. Classes for kids and adults, plus professional performances. Join Acrogym today!',
  keywords = 'aerial arts, aerial hammock, aerial hoop, aerial silks, lyra, gymnastics, flexibility training, acrobatics, aerial classes, aerial performances, kids gymnastics, adult aerial classes',
  ogImage = 'https://images.pexels.com/photos/3775164/pexels-photo-3775164.jpeg',
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });
  }, [title, description, keywords, ogImage]);

  return null;
}
