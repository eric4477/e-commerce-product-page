import "./ProductImages.css";
import { productImgs, thumbnails } from "./../../constants";
import { useEffect, useState } from "react";
import LightBox from "../LightBox/LightBox";

function ProductImages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImg, setActiveImg] = useState(productImgs[0]);
  const [openLightBox, setOpenLightBox] = useState(false);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };
  const handleImageClick = () => {
    setOpenLightBox(!openLightBox);
  };
  useEffect(() => {
    setActiveImg(productImgs[activeIndex]);
  }, [activeIndex]);
  return (
    <>
      {openLightBox && (
        <LightBox
          activeIndex={activeIndex}
          openLightBox={openLightBox}
          setOpenLightBox={setOpenLightBox}
        />
      )}

      <div className="product-images">
        <div onClick={handleImageClick} className="product-image">
          <img src={activeImg} alt={`Product Image ${activeIndex + 1}`} />
        </div>
        <div className="thumbnail-images">
          {thumbnails.map((thumbnail, index) => (
            <div
              className="thumbnail-image"
              style={{
                border:
                  index === activeIndex
                    ? "2px solid var(--orange)"
                    : "2px solid transparent",
              }}
              key={index}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                className={`${index === activeIndex ? "active-thumb" : ""}`}
                src={thumbnail}
                alt={`Thumbnail Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductImages;
