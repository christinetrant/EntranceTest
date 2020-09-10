import React from "react";
import "./Main.css";
import Toolbar from "../Toolbar/Toolbar"; 
import Canvas from "../Canvas/Canvas"; 
// Parent of the Toolbar and Canvas so they can work together 
const Main = ({ title, buttonInfo, onBtnClick, textToggled, borderToggled, colorToggled, imageToggled, layoutToggled }) => {
  return (
    <div className="main">
			<Toolbar onBtnClick={onBtnClick} />
			<Canvas 
				title={title} 
				buttonInfo={buttonInfo} 
				textToggled={textToggled} 
				borderToggled={borderToggled}
				colorToggled={colorToggled}
				imageToggled={imageToggled}
				layoutToggled={layoutToggled}
			/>
		</div>
  );
};

export default Main;