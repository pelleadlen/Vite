
import "../../styles/home.scss";


export const ColorPicker = (props) => {
  return (
    <div className="color-changer" >
      {props.text}

      <input className=" focus:outline-none focus:border-none" onChange={props.changeColor} style={{color: props.changeHex}}  type="text" value={props.value} /> 

    </div>
  );
};
