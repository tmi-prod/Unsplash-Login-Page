/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import { createApi } from "unsplash-js";
import "animate.css";

function UnsplashImages() {
  const unsplash = createApi({
    accessKey: "ImzFxs2PMfBzFCWiEasVlURmPaRE54zfUJdbYL73MCw",
  });

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages2();
  }, []);

  const fetchImages2 = () => {
    unsplash.search
      .getPhotos({
        query: "marketing-technology-",
        page: 1,
        perPage: 30,
      })
      .then((result) => {
        switch (result.type) {
          case "error":
            setImages([]);
            break;
          case "success":
            console.log(result.response.results);
            setImages(result.response.results);
            break;
          default:
            setImages([]);
        }
      });
  };

  const itemTemplate = (item) => {
    return (
      <img
        src={item.urls.regular}
        style={{
          width: "600px",
          height: "100vh",
        }}
        // animation: "fadeOutUp",
        // animationDuration: "2s",
        //className="opacity 200ms ease-in-out"
      />
    );
  };

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  return (
    <Galleria
      style={{ width: "100%", height: "100%" }}
      value={images}
      item={itemTemplate}
      circular
      autoPlay
      showItemNavigators={false}
      showThumbnailNavigators={false}
      showThumbnails={false}
      responsiveOptions={responsiveOptions}
      // transitionInterval={1000}
      // transitionOptions={{}}
    ></Galleria>
  );
}
export default UnsplashImages;
