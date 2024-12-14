import React, { useState } from "react";
//import "./MTstyles.css";

export default function MTApp() {
  const images = [
    "https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1080&crop=smart&auto=webp&s=28c3ad73cff636f7ba478a0c19d734cd538949d4",
    "https://randomwordgenerator.com/img/picture-generator/52e4d1424f5aa914f1dc8460962e33791c3ad6e04e5074417d2e72d2954ac5_640.jpg",
    "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
    "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    "https://shelf.io/wp-content/uploads/2024/06/random-forests-in-ml-for-advanced-decision-making-1.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUU-J_RPP78bk5BRbCTgvx8Vu8kMPDzpNSA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40KFwbGyAQwLnMAd1-u_JN69dfHRdqc_OiA&s",
  ];

  const carouselRef = React.useRef(null);

  const moveSlide = (direction) => {
    const scrollAmount = 175; // Width of each image
    if (carouselRef.current) {
      const currentScroll = carouselRef.current.scrollLeft;
      carouselRef.current.scrollTo({
        left: currentScroll + direction * scrollAmount,
        behavior: "smooth", // Add smooth scrolling
      });
    }
  };

  return (
    <div>
      <div className="header"></div>
      <div className="App">
        <h2 className="head">Title And Description</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor numquam
          provident enim omnis voluptate delectus voluptatum, dolorem vel ad
          doloremque quisquam dolorum quidem consectetur in vitae dolore, rerum
          aspernatur. Iure soluta, qui repellendus cum tempore dolorum
          distinctio explicabo, pariatur eos, ratione commodi. Atque, pariatur
          cumque?
        </p>
      </div>
      <div className="all-images" ref={carouselRef}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="prev" onClick={() => moveSlide(-1)}>
        &#10094;
      </button>
      <button className="next" onClick={() => moveSlide(1)}>
        &#10095;
      </button>

      <div className="boxes">
        <div className="box1">
          <h2 className="vision">VISION</h2>
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            ullam maxime, quaerat libero earum, error vero magni consequatur est
            saepe veritatis nulla alias architecto, laboriosam soluta enim quasi
            laborum delectus.
          </p>
        </div>
        <div className="box2">
          <h2 className="vision">ACTIVITIES</h2>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            minus est non architecto accusamus magni repudiandae velit illum vel
            qui consequatur fugiat animi placeat quos sapiente quidem dolor
            recusandae, nisi, ducimus modi delectus beatae.
          </p>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}