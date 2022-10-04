import { StyledCurrentCard } from "./CurrentForecastCard.style";
import { useAppSelector } from "../redux/hooks/useRedux";

type PropTypes = {
    isCels: boolean;
};

const CurrentForecastCard = ({ isCels }: PropTypes) => {
    const weather = useAppSelector((state) => state.weather.value);

    const loading = useAppSelector((state) => state.weather.loading);

    const currentDate = new Date();
    const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <StyledCurrentCard>
            {!loading ? (
                <>
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
                            {Math.round(
                                isCels
                                    ? weather.current?.temp_c || 0
                                    : weather.current?.temp_f || 0
                            )}
                            {isCels ? (
                                <span>&#8451;</span>
                            ) : (
                                <span>&#8457;</span>
                            )}
                        </div>
                        <div className="condition">
                            <img
                                src={weather.current?.condition?.icon}
                                alt=""
                            />
                            {weather.current?.condition?.text}
                        </div>
                    </div>

                    <div className="minmax-wind">
                        <span className="minmax">
                            Max:{" "}
                            {Math.round(
                                isCels
                                    ? weather.forecast?.forecastday[0]?.day
                                          ?.maxtemp_c || 0
                                    : weather.forecast?.forecastday[0]?.day
                                          ?.maxtemp_f || 0
                            )}
                            {isCels
                                ? `${String.fromCharCode(176)}C`
                                : `${String.fromCharCode(176)}F`}{" "}
                            Min:{" "}
                            {Math.round(
                                isCels
                                    ? weather.forecast?.forecastday[0]?.day
                                          ?.mintemp_c || 0
                                    : weather.forecast?.forecastday[0]?.day
                                          ?.mintemp_f || 0
                            )}
                            {isCels
                                ? `${String.fromCharCode(176)}C`
                                : `${String.fromCharCode(176)}`}
                        </span>
                        <span className="wind">
                            Wind: {weather.current?.wind_dir}{" "}
                            {Math.round(weather.current?.wind_kph || 0)}km/h
                        </span>
                    </div>
                </>
            ) : (
                <p>Loading</p>
            )}
        </StyledCurrentCard>
    );
};

export default CurrentForecastCard;

/* */
