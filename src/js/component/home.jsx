import React, { useState } from "react";


const Home = () => {
	
	const [light, setLight] = useState()

		const lightColor = (event) => {
		setLight(event.target.id)
		}

	return(
        <div className="Semaforo">
			<div id="palo"></div>
			<div id = "trafficLights">
				<div id="redLight" onClick={lightColor}>
				</div>
				<div id="yellowLight" onClick={lightColor}>
				</div>
				<div id="greenLight" onClick={lightColor}>
				</div>
			</div>
		</div>
    )
};

export default Home;
