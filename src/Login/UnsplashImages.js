/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import { createApi } from "unsplash-js";
import PropTypes from "prop-types";
import "animate.css";

function UnsplashImages({ apiKey, query, count, interval, width, height }) {
  const unsplash = createApi({
    accessKey: apiKey,
  });

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    unsplash.search
      .getPhotos({
        query: (query === undefined) | (query === "") ? "all" : query,
        page: 1,
        perPage: count,
        orientation: "portrait",
      })
      .then((result) => {
        console.log(result);
        if (result.errors) {
          setImages([
            {
              urls: { regular: require("./wallper/wall1.jpg") },
            },
            {
              urls: { regular: require("./wallper/wall2.jpg") },
            },
            {
              urls: { regular: require("./wallper/wall3.jpg") },
            },
            {
              urls: { regular: require("./wallper/wall4.jpg") },
            },
            {
              urls: { regular: require("./wallper/wall5.jpg") },
            },
            {
              urls: { regular: require("./wallper/wall6.jpg") },
            },
            {
              urls: { regular: require("./wallper/wall7.jpg") },
            },
            {
              urls: { regular: require("./wallper/wall8.jpg") },
            },
            {
              urls: { regular: require("./wallper/wall9.jpg") },
            },
            {
              urls: { regular: require("./wallper/wall10.jpg") },
            },
          ]);
          console.log("error occurred: ", result.errors[0]);
        } else {
          setImages(result.response.results);
          //console.log(result.response.results);
        }
      });
  };

  const itemTemplate = (item) => {
    return (
      <img
        src={item.urls.regular}
        style={{
          width: width,
          height: height,
        }}
        // animation: "fadeOutUp",
        // animationDuration: "2s",
        //className="opacity 200ms ease-in-out"
      />
    );
  };

  return (
    <Galleria
      style={{
        width: "auto",
        height: "auto",
        clipPath: "polygon(20% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
      //style={{ width: "auto", height: "auto", padding: 10 }}
      value={images}
      item={itemTemplate}
      circular
      autoPlay
      showItemNavigators={false}
      showThumbnailNavigators={false}
      showThumbnails={false}
      transitionInterval={interval}
      // transitionOptions={{}}
    ></Galleria>
  );
}

UnsplashImages.propTypes = {
  apiKey: PropTypes.string,
  query: PropTypes.string,
  count: PropTypes.number,
  interval: PropTypes.number,
};

export default UnsplashImages;
