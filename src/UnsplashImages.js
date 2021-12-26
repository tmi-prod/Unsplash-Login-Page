/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Galleria } from "primereact/galleria";

function UnsplashImages() {
  const clientId = "ImzFxs2PMfBzFCWiEasVlURmPaRE54zfUJdbYL73MCw";

  const [query, setQuery] = useState("technology");
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    console.log(query);
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      query +
      "&client_id=" +
      clientId;
    axios.get(url).then((response) => {
      console.log(response);
      setImages(response.data.results);
    });
  };

  const itemTemplate = (item) => {
    return (
      <img src={item.urls.thumb} style={{ width: "auto", height: "auto" }} />
    );
  };

  const thumbnailTemplate = (item) => {
    return <img src={item.urls.thumb} />;
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10);
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
    <div className="app">
      <Galleria
        value={images}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
      ></Galleria>
    </div>
  );
}
export default UnsplashImages;

/* 
{images.map((image) => (
          <>
            <div className="card">
              <img src={image.urls.thumb} />
            </div>
          </>
        ))}

*/
