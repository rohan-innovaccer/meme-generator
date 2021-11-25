import React from "react";
import "./MemeList.css";

const MemeList = ({memeArray, setSelectedImage}) => {
 const handleClick = (id) => {
  setSelectedImage(id)
 }

  const memeList = memeArray.map((meme) => {
    return <img className="selected" src={meme.url} key={meme.id} onClick={() => handleClick(meme.id)} alt="meme"/>
  })
  return memeList;
};

export default MemeList;
