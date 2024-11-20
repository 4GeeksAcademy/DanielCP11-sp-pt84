import React, { useState } from "react";
import Lamp from "./Lamp";

//include images into your bundle


const styleWire = {
	margin: "auto",
	width: "1em",
	height: "3em"
};

const styleContainer = {
	margin: "auto",
	paddingTop: 7,
	paddingBottom: 7,
	width: "9em",
	borderRadius: "10px"
};

const styleButtom = {
	margin: "1em",
	width: "4em",
	height: "4em",
	border: "solid",
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
		<div className="d-flex justify-content-center ">
			<button type="button" style={styleButtom} onClick={clickButtomChange}>
			<i className="fa-solid fa-arrows-rotate fs-2"></i>
			</button>
			<button type="button" style={{...styleButtom, background: "purple"}} onClick={clickButtomPurple}>
			<i class="fa-solid fa-circle-plus fs-1"></i>
			</button>
		</div>
		</>
	);
};

export default Home;