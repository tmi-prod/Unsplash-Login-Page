import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import { createApi } from "unsplash-js";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

function App() {
  const unsplash = createApi({
    accessKey: "ImzFxs2PMfBzFCWiEasVlURmPaRE54zfUJdbYL73MCw",
  });

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    unsplash.search
      .getPhotos({
        query: "software",
        page: 1,
        perPage: 10,
        orientation: "portrait",
      })
      .then((result) => {
        console.log(result);
        if (result.errors) {
          setImages([
            {
              urls: { regular: require("./Login/wallper/wall1.jpg") },
            },
            {
              urls: { regular: require("./Login/wallper/wall2.jpg") },
            },
            {
              urls: { regular: require("./Login/wallper/wall3.jpg") },
            },
            {
              urls: { regular: require("./Login/wallper/wall4.jpg") },
            },
            {
              urls: { regular: require("./Login/wallper/wall5.jpg") },
            },
            {
              urls: { regular: require("./Login/wallper/wall6.jpg") },
            },
            {
              urls: { regular: require("./Login/wallper/wall7.jpg") },
            },
            {
              urls: { regular: require("./Login/wallper/wall8.jpg") },
            },
            {
              urls: { regular: require("./Login/wallper/wall9.jpg") },
            },
            {
              urls: { regular: require("./Login/wallper/wall10.jpg") },
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
          width: "100%",
          height: "100%",
        }}
      />
    );
  };

  const [checked, setChecked] = useState(false);
  return (
    <div className="grid surface-200 text-800" style={{ height: "100vh" }}>
      <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section style={{ width: "100%" }}>
          <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
              <div className="text-center mb-5">
                <img
                  src="assets/images/blocks/logos/hyper.svg"
                  alt="hyper"
                  height={50}
                  className="mb-3"
                />
                <div className="text-900 text-3xl font-medium mb-3">
                  Welcome Back
                </div>
                <span className="text-600 font-medium line-height-3">
                  Don't have an account?
                </span>
                <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
                  Create today!
                </a>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-900 font-medium mb-2"
                >
                  Email
                </label>
                <InputText id="email" type="text" className="w-full mb-3" />

                <label
                  htmlFor="password"
                  className="block text-900 font-medium mb-2"
                >
                  Password
                </label>
                <InputText
                  id="password"
                  type="password"
                  className="w-full mb-3"
                />

                <div className="flex align-items-center justify-content-between mb-6">
                  <div className="flex align-items-center">
                    <Checkbox
                      id="rememberme"
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      binary
                      className="mr-2"
                    />
                    <label htmlFor="rememberme">Remember me</label>
                  </div>
                  <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
                    Forgot your password?
                  </a>
                </div>

                <Button label="Sign In" icon="pi pi-user" className="w-full" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="col-12 p-0 md:col-6 overflow-hidden"
        style={{ height: "100vh" }}
      >
        <Galleria
          style={{
            width: "auto",
            height: "auto",
            clipPath: "polygon(20% 0, 100% 0%, 100% 100%, 0 100%)",
          }}
          value={images}
          item={itemTemplate}
          circular
          autoPlay
          showItemNavigators={false}
          showThumbnailNavigators={false}
          showThumbnails={false}
          transitionInterval={4000}
        ></Galleria>
      </div>
    </div>
  );
}

export default App;
