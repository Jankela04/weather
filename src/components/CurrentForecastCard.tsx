import React from "react";
import { StyledCurrentCard } from "./CurrentForecastCard.style";

const CurrentForecastCard = () => {
    return (
        <StyledCurrentCard>
            <div className="date-time">
                <span className="date">Fri Sep 16, 2022</span>
                <span className="time">06:65</span>
            </div>
            <div className="temp-condition">
                <div className="temp">
                    20<span>&#x2103;</span>
                </div>
                <div className="condition">
                    <img
                        src="//cdn.weatherapi.com/weather/64x64/day/113.png"
                        alt=""
                    />
                    Sunny
                </div>
            </div>
            <div className="minmax-wind">
                <span className="minmax">Max: 23&#x2103; Min: 15&#x2103;</span>
                <span className="wind">Wind: North 5km/h</span>
            </div>
        </StyledCurrentCard>
    );
};

export default CurrentForecastCard;

/* */
