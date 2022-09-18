import React from "react";
import { StyledCurrentCard } from "./CurrentForecastCard.style";
import { useAppSelector } from "../redux/hooks/useRedux";

const CurrentForecastCard = () => {
    const weather = useAppSelector((state) => state.weather.value);

    return (
        <StyledCurrentCard>
            <div className="date-time">
                <span className="date">Fri Sep 16, 2022</span>
                <span className="time">06:65</span>
            </div>
            <div className="temp-condition">
                <div className="temp">
                    {weather.current
                        ? Math.round(weather.current?.temp_c)
                        : "Error"}
                    <span>&#x2103;</span>
                </div>
                <div className="condition">
                    <img src={weather.current?.condition?.icon} alt="" />
                    {weather.current?.condition?.text}
                </div>
            </div>

            <div className="minmax-wind">
                <span className="minmax">
                    Max:{" "}
                    {weather.forecast
                        ? Math.round(
                              weather.forecast?.forecastday[0]?.day?.maxtemp_c
                          )
                        : "error"}
                    &#x2103; Min:{" "}
                    {weather.forecast
                        ? Math.round(
                              weather.forecast?.forecastday[0].day?.mintemp_c
                          )
                        : "error"}
                    &#x2103;
                </span>
                <span className="wind">Wind: North 5km/h</span>
            </div>
        </StyledCurrentCard>
    );
};

export default CurrentForecastCard;

/* */
