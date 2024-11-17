import React, { useState } from "react";
import Lamp from "./Lamp";

//include images into your bundle


const styleWire = {
	margin: "auto",
	width: "0.5em",
	height: "1em"
};

const styleContainer = {
	margin: "auto",
	paddingTop: 3,
	paddingBottom: 3,
	width: "3em",
	borderRadius: "10px"
};

const styleButtom = {
	margin: "1em",
	width: "2em",
	height: "2em",
	border: "none",
	borderRadius: "50%",
	fontSize: "1em"
};

//create your first component
const Home = () => {
	const [selectLamp, setSelectLamp] = useState(-1);
	const [lamps, setLamps] = useState(["red", "yellow", "green"]);

	const clickLAmp = (index) => {
		setSelectLamp(selectLamp === index ? -1 : index);
	};

	const clickButtomChange = () => {
		setSelectLamp((currentLamp) => {if (currentLamp == lamps.length-1){return currentLamp = 0} return currentLamp + 1 });
	};
	
	const clickButtomPurple = () => {
		if (lamps.length == 3){
			setLamps([...lamps, "purple"]);
		};
}
	return (
		<>
		<div className="bg-dark" style={styleWire}></div>
		<div className="bg-dark" style={styleContainer}>
			{lamps.map((color, index) => (
				<Lamp
					color={color}
					key={index}
					isOn={selectLamp === index}
					onClick={() => {clickLAmp(index)}}
				/>
			))}
		</div>
		<div className="d-flex justify-content-center">
			<button type="btn" style={styleButtom} onClick={clickButtomChange}>
			</button>
			<button type="btn" style={{...styleButtom, background: "purple"}} onClick={clickButtomPurple}>
			</button>
		</div>
		</>
	);
};

export default Home;