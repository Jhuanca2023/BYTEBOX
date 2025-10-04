// Utilidad para cachear imágenes usando Cache API nativa del navegador
class ImageCache {
  private cacheName = 'bytebox-images-v1';
  
  // Precargar y cachear una imagen
  async preloadAndCache(imageUrl: string): Promise<void> {
    try {
      const cache = await caches.open(this.cacheName);
      
      // Verificar si ya está en cache
      const cachedResponse = await cache.match(imageUrl);
      if (cachedResponse) {
        return; // Ya está cacheada
      }
      
      // Descargar y cachear
      const response = await fetch(imageUrl);
      if (response.ok) {
        await cache.put(imageUrl, response.clone());
      }
    } catch (error) {
      console.warn('Error caching image:', imageUrl, error);
    }
  }
  
  // Precargar múltiples imágenes
  async preloadImages(imageUrls: string[]): Promise<void> {
    const promises = imageUrls.map(url => this.preloadAndCache(url));
    await Promise.all(promises);
  }
  
  // Obtener imagen desde cache
  async getCachedImage(imageUrl: string): Promise<string | null> {
    try {
      const cache = await caches.open(this.cacheName);
      const cachedResponse = await cache.match(imageUrl);
      
      if (cachedResponse) {
        const blob = await cachedResponse.blob();
        return URL.createObjectURL(blob);
      }
      
      return null;
    } catch (error) {
      console.warn('Error getting cached image:', error);
      return null;
    }
  }
  
  // Limpiar cache antiguo
  async clearOldCache(): Promise<void> {
    try {
      const cacheNames = await caches.keys();
      const oldCaches = cacheNames.filter(name => 
        name.startsWith('bytebox-images-') && name !== this.cacheName
      );
      
      await Promise.all(
        oldCaches.map(cacheName => caches.delete(cacheName))
      );
    } catch (error) {
      console.warn('Error clearing old cache:', error);
    }
  }
}

export const imageCache = new ImageCache();

// Hook para usar el cache de imágenes
export const useImageCache = () => {
  const preloadImages = async (urls: string[]) => {
    await imageCache.preloadImages(urls);
  };
  
  const preloadImage = async (url: string) => {
    await imageCache.preloadAndCache(url);
  };
  
  return { preloadImages, preloadImage };
};
