import "./LightBox.css";
import { thumbnails, productImgs } from "../../constants";
import { IoCloseSharp } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";

function LightBox({ activeIndex, openLightBox, setOpenLightBox }) {
  let [currIndex, setCurrIndex] = useState(activeIndex);

  const handleThumbnailClick = (index) => {
    setCurrIndex(index);
  };

  const handleLeftArrowClick = () => {
    setCurrIndex((prevIndex) => {
      if (prevIndex === 0) {
        return productImgs.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleRightArrowClick = () => {
    setCurrIndex((prevIndex) => {
      if (prevIndex >= productImgs.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const lightBoxRef = useRef(null);
  // Effect to add click outside listener when lightbox is open
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (lightBoxRef.current && !lightBoxRef.current.contains(e.target)) {
        setOpenLightBox(false);
      }
    };

    if (openLightBox) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openLightBox]);

  return (
    <div className="lightbox-wrapper">
      <div ref={lightBoxRef} className="lightbox">
        <div className="close-btn">
          <IoCloseSharp onClick={() => setOpenLightBox(false)} />
        </div>
        <div className="lightbox-product-images">
          <img
            src={productImgs[currIndex]}
            alt={`Product Image ${currIndex + 1}`}
          />
          <FaChevronLeft
            className="left-arrow"
            onClick={handleLeftArrowClick}
          />
          <FaChevronRight
            className="right-arrow"
            onClick={handleRightArrowClick}
          />
        </div>
        <div className="lightbox-thumbnail-images">
          {thumbnails.map((img, index) => (
            <div
              className={`lightbox-thumbnail-image ${
                index === currIndex ? "active" : ""
              }`}
              style={{
                outline:
                  index === currIndex
                    ? "2px solid var(--orange)"
                    : "2px solid transparent",
              }}
              key={index}
              onClick={() => handleThumbnailClick(index)}
            >
              <img src={img} alt={`Thumbnail Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LightBox;
