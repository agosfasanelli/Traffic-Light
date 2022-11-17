import React, { useState } from "react";
import Light from "./light";


const Home = () => {

	const [stateLight, setStateLight] = useState ({
        red: "off",
        yellow: "off",
        green: "off"
    })

   
	return(
		<div className="Semaforo">
			<div id="palo"></div>
			<div id="trafficLights">
				<Light 
				style={stateLight.red== "off" ? "red" : "redOn"} 
				color = {"red"}
				/>
				<Light 
				style={stateLight.yellow== "off" ? "yellow" : "yellowOn"} 
				color = {"yellow"}
				/>
				<Light 
				style={stateLight.green== "off" ? "green" : "greenOn"} 
				color = {"green"}
				/>
			</div>
    	</div>
		)
};

export default Home;
