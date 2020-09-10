import React from "react";
import "./Toolbar.css";

const Toolbar = ({ onBtnClick }) => {
	const btnAmount = [1,2,3,4,5,6];
  return (
    <div className="toolbar">
      <div className="toolbar-nav">
				{/* 'I wanted to dynamically create buttons using array - could not figure out how to get the images to load! :( - workaround - used css background on button class and removed img tag' */}
				{
				btnAmount.map((b, i) => {
					return (
						<button key={i} className={`btn-${btnAmount[i]}`} onClick={onBtnClick} value={btnAmount[i]}>
							{/* <img src={btn} alt={btnAmount[i]} /> */}
						</button>
					)
				})
				}
			</div>
		</div>
  );
};

export default Toolbar;