import { useEffect } from "react";
import "./App.css";
import CurrentForecastCard from "./components/CurrentForecastCard";
import { Heading } from "./components/Heading.style";
import { useAppDispatch, useAppSelector } from "./redux/hooks/useRedux";
import { fetchWeather } from "./redux/slices/weatherSlice";
import { setWeatherApiKey } from "./redux/slices/apiKeysSlice";

function App() {
    const weather = useAppSelector((state) => state.weather.value);
    const weatherApiKey = useAppSelector(
        (state) => state.apiKeys.weatherApiKey
    );
    const dispatch = useAppDispatch();

    const WEATHER_API_KEY = "17c9212f81fe4ad699174506221609";

    useEffect(() => {
        localStorage.setItem("weatherApiKey", WEATHER_API_KEY);
        dispatch(setWeatherApiKey(localStorage.getItem("weatherApiKey")));
    }, [dispatch]);

    useEffect(() => {
        if (weatherApiKey.length > 1) {
            dispatch(fetchWeather(weatherApiKey));
        }
    }, [weatherApiKey, dispatch]);

    return (
        <div className="App">
            <Heading>
                {weather.location?.name}, {weather.location?.country}
            </Heading>
            <CurrentForecastCard />
        </div>
    );
}

export default App;
