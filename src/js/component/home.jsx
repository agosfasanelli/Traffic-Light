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
				 
				/>
				<Light 
				
				/>
				<Light 
				
				/>
			</div>
    	</div>
		)
};

export default Home;
