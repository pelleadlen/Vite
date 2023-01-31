import { useState, useEffect } from "react";
import "../styles/home.scss";
import { ColorPicker } from "../components/typography-module/colorPicker";
import { Slider } from "../components/typography-module/Slider";

export const Home = () => {
  const [fontWeights, setFontWeights] = useState(100);
  const [fontItalic, setFontItalic] = useState(0);
  const [fontSize, setFontSize] = useState(128);
  const [lineHeight, setLineHeight] = useState(100);

  const [changeHex, setChangeHex] = useState("#444444")

  useEffect(() => {
    document.documentElement.style.setProperty("--fontWeight", fontWeights);
  }, [fontWeights]);
  useEffect(() => {
    document.documentElement.style.setProperty("--fontItalic", fontItalic);
  }, [fontItalic]);
  useEffect(() => {
    document.documentElement.style.setProperty("--fontSize", `${fontSize}px`);
  }, [fontSize]);
  useEffect(() => {
    document.documentElement.style.setProperty("--lineHeight", `${lineHeight}%`);
  }, [lineHeight]);


  return (
    <>
      <main className="wrapper">


        <div className=" typography-modal">
          <h3 style={{color: changeHex}} contentEditable className="whyte ">ABCDEFGHIJKLMNOPQRSTUVWZÅÄÖ</h3>
        </div>
 

  
      </main>
      <footer>
        <div className="color-change-wrapper">
          <ColorPicker changeHex={changeHex} changeColor={(e) => setChangeHex(e.target.value)}  value={changeHex}  text="Text:" />
          {/* <ColorPicker text="Text:" /> */}
     
        </div>
        <div className="slider-container">
        <Slider
            label={`Size: ${fontSize} px`}
            min={128}
            max={300}
            fontSize={fontSize}
            onSlide={(e) => setFontSize(e.target.value)}
          />
          <Slider
            label={`Weight: ${fontWeights}`}
            min={100}
            max={900}
            fontSize={fontWeights}
            onSlide={(e) => setFontWeights(e.target.value)}
          />
      
       
           <Slider
            label={`Line height: ${lineHeight}%`}
            min={100}
            max={300}
            fontSize={lineHeight}
            onSlide={(e) => setLineHeight(e.target.value)}
          />
       
              <Slider
            label={`Italic: ${fontItalic}`}
            min={0}
            max={12}
            fontSize={fontItalic}
            onSlide={(e) => setFontItalic(e.target.value)}
          />
        </div>
      </footer>
    </>
  );
};
