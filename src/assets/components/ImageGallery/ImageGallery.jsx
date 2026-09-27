import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ galleryData, onOpenModal }) => {
  return (
    <ul className={s.list}>
      {galleryData.map(({ alt_description, urls: { small, regular }, id }) => (
        <li
          key={id}
          className={s.item}
          onClick={() => onOpenModal({ regular, id, alt_description })}
        >
          <ImageCard src={small} alt={alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
