export const Slider = (props) => {
  return (
    <>
      <form className="flex items-center gap-2 slider">
        <label>{props.label}</label>
        <input
          value={props.fontSize}
          onChange={props.onSlide}
          type="range"
          min={props.min}
          max={props.max}
        />
      </form>
    </>
  );
};
