import { useState, useEffect } from "react";
import "../styles/home.scss";
import { ColorPicker } from "../components/colorPicker";
import { Slider } from "../components/Slider";

export const Home = () => {
  const [fontWeights, setFontWeights] = useState(100);
  const [fontItalic, setFontItalic] = useState(0);
  const [fontSize, setFontSize] = useState(128);

  useEffect(() => {
    document.documentElement.style.setProperty("--fontWeight", fontWeights);
  }, [fontWeights]);
  useEffect(() => {
    document.documentElement.style.setProperty("--fontItalic", fontItalic);
  }, [fontItalic]);
  useEffect(() => {
    document.documentElement.style.setProperty("--fontSize", `${fontSize}px`);
  }, [fontSize]);

  return (
    <>
      <main className="wrapper">
        <div className=" typography-modal">
          <h3 className="whyte ">ABCDEFGHIJKLMNOPQRSTUVWZÅÄÖ</h3>
        </div>
      </main>
      <footer>
        <div className="color-change-wrapper">
          <ColorPicker text="Background:" />
          <ColorPicker text="Text:" />
        </div>
        <div className="slider-container">
          <Slider
            label={`Weight: ${fontWeights}`}
            min={100}
            max={900}
            fontSize={fontWeights}
            onSlide={(e) => setFontWeights(e.target.value)}
          />
          <Slider
            label={`Italic: ${fontItalic}`}
            min={0}
            max={12}
            fontSize={fontItalic}
            onSlide={(e) => setFontItalic(e.target.value)}
          />
          <Slider
            label={`Size: ${fontSize} px`}
            min={128}
            max={300}
            fontSize={fontSize}
            onSlide={(e) => setFontSize(e.target.value)}
          />
        </div>
      </footer>
    </>
  );
};
