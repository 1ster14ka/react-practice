import s from "./ImageCard.module.css";

const ImageCard = ({ src, alt }) => {
  return (
    <>
      <img src={src} alt={alt} className={s.img} />
    </>
  );
};

export default ImageCard;
