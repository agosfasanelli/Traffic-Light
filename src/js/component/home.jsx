import React, {useState} from "react";

const Home = () => {

	const [red, sertRed] = useState("red")
	const handleClick1 = () => {
		sertRed("redOn")
		setYellow("yellow")
		setGreen("green")
	}
	
	const [yellow, setYellow] = useState("yellow")
	const handleClick2 = () => {
		setYellow("yellowOn")
		sertRed("red")
		setGreen("green")
	}
	const [green, setGreen] = useState("green")
	const handleClick3 = () => {
		setGreen("greenOn")
		sertRed("red")
		setYellow("yellow")
	}
	return (
		<div className="container">
			<div className="palo"></div>
			<div className="trafficLights">
				<div class="text-center">
					<button 
					onClick={handleClick1}
					className={red}>
					</button>
				</div>
				<div class="text-center">
					<button 
					onClick={handleClick2}
					className={yellow}>
					</button>
				</div>
				<div class="text-center">
					<button 
					onClick={handleClick3}
					className={green}>
					</button>
				</div>
			</div>
			</div>
		
			
		
	
	);
};

export default Home;
