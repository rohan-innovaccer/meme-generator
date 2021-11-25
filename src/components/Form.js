import React, { useState } from "react";
import "./Form.css";

const Form = ({setShowMeme, selectedImage}) => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [myMeme, setMyMeme] = useState("")

  const handleTopTextChange = (e) => {
    setTopText(e.target.value);
  };

  const handleBottomTextChange = (e) => {
    setBottomText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    const objectToParam = obj => {
      const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
      return "?" + params.join("&");
    };

    const params = {
              template_id: selectedImage,
              text0: topText,
              text1: bottomText,
              username: "rohan04",
              password: "rohanmathur"
            };

    fetch(`https://api.imgflip.com/caption_image${objectToParam(params)}`,{
      method:"POST",
      }).then((response) => response.json())
        .then((response) => {
          setMyMeme(response.data.url);
      })
  };

  const goBack = () => {
    setShowMeme(true);
  };

  return (
    <div>
      <h2>Generate your own meme!</h2>
      <button className="secondary-btn" onClick={goBack}>
        Go Back!
      </button>
      {topText && <button className="primary-btn" onClick={handleClick}>
        Generate
      </button>}
      <div className="container">
        <input onChange={handleTopTextChange} value={topText} placeholder="top text"/>
        <input onChange={handleBottomTextChange} value={bottomText} placeholder="bottom text"/>
      </div>
      {myMeme && <img className="output" src={myMeme}/>}
    </div>
  );
};

export default Form;
