import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

export const SeoComponent: React.FC<SEOProps> = ({
  title = 'ByteBOX - Accesorios y equipos tecnológicos',
  description = 'Descubre los mejores accesorios y equipos tecnológicos en ByteBOX. Calidad y estilo en un solo lugar.',
  keywords = 'tecnología, accesorios, equipos tecnológicos, ByteBOX, gadgets',
  canonicalUrl
}) => {
  useEffect(() => {

    document.title = title;
    

    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;
    
 
    let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;
    
    
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalUrl) {
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = 'canonical';
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.href = canonicalUrl;
    } else if (linkCanonical) {
  
      linkCanonical.remove();
    }
    

    return () => {
     
    };
  }, [title, description, keywords, canonicalUrl]);

  return null; 
};

export default SeoComponent;
