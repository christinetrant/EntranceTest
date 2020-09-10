import React from "react";
import "./Canvas.css";
// Where the magic happens
const Canvas = ({ title, buttonInfo, textToggled, borderToggled, colorToggled, imageToggled, layoutToggled }) => {
  // I'm sure there is a cleaner way to save these ternary statements as as variables and then add them into className
  return (
    <div className={`content ${borderToggled ? 'border-btn' : ''}`}>
      <div className={`text-area ${layoutToggled ? 'layout-btn' : ''} ${colorToggled ? 'color-btn' : ''}`}>
        <h1 className={textToggled ? 'text-btn' : ''}>{title}</h1>
        {!buttonInfo ? '' : <h4>Button pressed: {buttonInfo}</h4> }
        {/* On Image Btn Click show image */}
        {imageToggled ? <p className="image-btn"></p> : ''}
      </div>
        
		</div>
  );
};

export default Canvas;