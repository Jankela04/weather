import React from "react";
import { StyledCurrentCard } from "./CurrentForecastCard.style";
import { useAppSelector } from "../redux/hooks/useRedux";

const CurrentForecastCard = () => {
    const weather = useAppSelector((state) => state.weather.value);

    const loading = useAppSelector((state) => state.weather.loading);

    const currentDate = new Date();
    const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
        <StyledCurrentCard>
            <div className="date-time">
                <span className="date">
                    {weather.location?.localtime.slice(0, 10)}
                    {` ${daysInWeek[currentDate.getDay()]}`}
                </span>
                <span className="time">
                    {currentDate.getHours()}:
                    {String(currentDate.getMinutes()).padStart(2, "0")}
                </span>
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
                <span className="wind">
                    Wind: {weather.current?.wind_dir}{" "}
                    {Math.round(weather.current?.wind_kph || 0)}km/h
                </span>
            </div>
        </StyledCurrentCard>
    );
};

export default CurrentForecastCard;

/* */
