import LazyImage from './LazyImage/LazyImage';

type SolutionImageProps = {
  img: string;
  alt: string;
};

const SolutionImage = ({ img, alt }: SolutionImageProps) => (
  <div className="solution-card solution-image-card" style={{ padding: 0, margin: 0, height: '100%' }}>
    <LazyImage 
      src={img} 
      alt={alt} 
      className="solution-img"
      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', display: 'block' }}
      loading="lazy"
    />
  </div>
);

export default SolutionImage; 
