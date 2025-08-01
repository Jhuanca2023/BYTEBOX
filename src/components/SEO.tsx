import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'ByteBOX - Accesorios y equipos tecnológicos',
  description = 'Descubre los mejores accesorios y equipos tecnológicos en ByteBOX. Calidad y estilo en un solo lugar.',
  keywords = 'tecnología, accesorios, equipos tecnológicos, ByteBOX, gadgets',
  canonicalUrl
}) => {
  useEffect(() => {
    // Actualizar título
    document.title = title;
    
    // Crear o actualizar meta descripción
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;
    
    // Crear o actualizar meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;
    
    // Añadir URL canónica si se proporciona
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalUrl) {
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = 'canonical';
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.href = canonicalUrl;
    } else if (linkCanonical) {
      // Si existe pero no debería, eliminarlo
      linkCanonical.remove();
    }
    
    // Limpieza al desmontar
    return () => {
      // No revertimos los cambios al desmontar para mantener el SEO consistente
      // durante la navegación del cliente
    };
  }, [title, description, keywords, canonicalUrl]);

  return null; // Este componente no renderiza nada en el DOM
};

export default SEO;
