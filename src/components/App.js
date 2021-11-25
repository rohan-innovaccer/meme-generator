import { useEffect, useState } from "react";
import "./App.css";
import MemeList from "./MemeList";
import Form from "./Form";

export default function App() {
  const [memes, setMemes] = useState([]);
  const [showMeme, setShowMeme] = useState(true);
  const [selectedImage, setSelectedImage] = useState(87743020);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        setMemes(response.data.memes);
      })
      .catch((err) => console.log(err));
  }, []);

  const showForm = () => {
    setShowMeme(false);
  };

  return (
    <div className="App">
      {showMeme && <button className="generate-btn" onClick={showForm}>Create your own meme!</button>}
      {showMeme ? <MemeList memeArray={memes} setSelectedImage={setSelectedImage}/> : <Form setShowMeme={setShowMeme} selectedImage={selectedImage}/>}
    </div>
  );
}
