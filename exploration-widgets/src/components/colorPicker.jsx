import { ChromePicker } from "react-color";

export const ColorPicker = (props) => {
  return (
    <div className="color-changer">
      {props.text}
      <div>
        #01EF8E <div className="color-picker" />
      </div>
      {/* <ChromePicker /> */}
    </div>
  );
};
