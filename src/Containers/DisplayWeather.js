import React, { useState, useEffect } from "react";
import "./style.css";
import FetchWeather from "../Api/FetchWeather";
import { connect } from "react-redux";
import { defaultCaseCall } from "../actions/actions";

const DisplayWeather = (props) => {
	const { testReducer, handledefaultCaseCall } = props;
	const { defaultCaseData, updatedState } = testReducer;
	console.log(defaultCaseData, "-------------", updatedState);
	const [query, setQuery] = useState();
	const [weather, setWeather] = useState({});
	useEffect(() => {
		handledefaultCaseCall();
	});
	const handleSearch = (e) => {
		setQuery(e.target.value);
	};
	const keyPressSearch = async (e) => {
		if (e.key === "Enter") {
			const data = await FetchWeather(query);
			setWeather(data);
			setQuery("");
			console.log(data, "Data of display waether");
		}
	};
	return (
		<div className="main-container">
			<input
				type="text"
				name="query"
				className="search"
				placeholder="Search"
				value={query || ""}
				onChange={(e) => handleSearch(e)}
				onKeyPress={keyPressSearch}
			/>
			{/* {handledefaultCaseCall()} */}
			{weather.main && (
				<div className="city">
					<h2 className="city-name">
						<span>{weather.name}</span>
						<sup>{weather.sys.country}</sup>
					</h2>
					<div className="city-temp">
						{Math.round(weather.main.temp)}
						<sup>&deg;C</sup>
					</div>
					<div className="info">
						<img
							className="city-icon"
							src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
							alt={weather.weather[0].description}
						/>
						<p>{weather.weather[0].description}</p>
					</div>
				</div>
			)}
		</div>
	);
};
export const mapStateToProps = (state) => {
	console.log(state);
	const { testReducer } = state;
	return { testReducer };
};
export const mapDispatchToProps = (dispatch) => ({
	handledefaultCaseCall: () => dispatch(defaultCaseCall()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayWeather);
