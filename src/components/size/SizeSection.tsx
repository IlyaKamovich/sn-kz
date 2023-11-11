import { LazyLoadImage } from 'react-lazy-load-image-component';
import './size-section.scss';

const SIZES = ['images/size1.webp', 'images/size2.webp'];

const SizeSection = () => {
  return (
    <section id="size" className="size">
      <div className="container">
        <h2 className="size-title">как выбрать размер</h2>
        <div className="size-images">
          {SIZES.map((src, index) => (
            <LazyLoadImage effect="blur" src={src} key={index} alt="size" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SizeSection;
