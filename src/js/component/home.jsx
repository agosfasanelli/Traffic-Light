import React from "react";


const Home = () => {
	const palo = {
		backgroundColor: "black",
        width: "15px",
        height: "60px",
		textAlgin: "center",
		}
	const trafficLights = {
        backgroundColor: "black",
        width: "110px",
        height: "300px",
		textAlgin: "center",
		marginLeft: "45%",
		borderRadius: "8%"
    }
	const redLight = {
		backgroundColor: "red",
		borderRadius: "50%",
		width: "100px",
        height: "100px",
		marginLeft: "4%"
	}
	const yellowLight = {
		backgroundColor: "yellow",
		borderRadius: "50%",
		width: "100px",
        height: "100px",
		textAlgin: "center",		
		marginLeft: "4%"
	}
	const greenLight = {
		backgroundColor: "green",
		borderRadius: "50%",
		width: "100px",
        height: "100px",
		textAlgin: "center",
		marginLeft: "4%"
	}

	
	return(
        <div className="Semasforo">
			<div style={palo}></div>
			<div style = {trafficLights}>
				<div style={redLight}></div>
				<div style={yellowLight}></div>
				<div style={greenLight}></div>
			</div>
			
        </div>
    )
};

export default Home;
