import { useEffect, useState } from "react";
import "./App.css";
import CurrentForecastCard from "./components/CurrentForecastCard";
import { Heading } from "./components/Heading.style";
import { useAppDispatch, useAppSelector } from "./redux/hooks/useRedux";
import { fetchWeather } from "./redux/slices/weatherSlice";
import { setWeatherApiKey } from "./redux/slices/apiKeysSlice";
import NextHoursForecastCard from "./components/NextHoursForecastCard";

function App() {
    const weather = useAppSelector((state) => state.weather.value);
    const weatherApiKey = useAppSelector(
        (state) => state.apiKeys.weatherApiKey
    );
    const dispatch = useAppDispatch();

    const WEATHER_API_KEY = "17c9212f81fe4ad699174506221609";

    const [coords, setCoords] = useState("");

    useEffect(() => {
        // getting user location
        navigator.geolocation.getCurrentPosition(function (position) {
            setCoords(
                `${position.coords.latitude},${position.coords.longitude}`
            );
        });
    }, []);

    useEffect(() => {
        //set key to local storage, and store it on redux state
        localStorage.setItem("weatherApiKey", WEATHER_API_KEY);
        dispatch(setWeatherApiKey(localStorage.getItem("weatherApiKey")));
    }, [dispatch]);

    useEffect(() => {
        //fetch api

        const data = { weatherKey: weatherApiKey, coords: coords };
        if (weatherApiKey.length > 1 && coords.length > 1) {
            dispatch(fetchWeather(data));
        }
    }, [weatherApiKey, dispatch, coords]);

    return (
        <div className="App">
            <Heading>
                {weather.location?.name}, {weather.location?.country}
            </Heading>
            <CurrentForecastCard />
            <NextHoursForecastCard />
        </div>
    );
}

export default App;
