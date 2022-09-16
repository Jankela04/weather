import { useEffect } from "react";
import "./App.css";
import CurrentForecastCard from "./components/CurrentForecastCard";
import { Heading } from "./components/Heading.style";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "./features/hooks/useRedux";
import { fetchWeather } from "./features/slices/weatherSlice";

function App() {
    const weather = useAppSelector((state) => state.weather.value);
    const dispatch = useAppDispatch();

    const localWeatherKey = localStorage.getItem("weatherApiKey");

    const weatherKey = localWeatherKey
        ? localWeatherKey
        : "17c9212f81fe4ad699174506221609";

    useEffect(() => {
        localStorage.setItem("weatherApiKey", "17c9212f81fe4ad699174506221609");
        dispatch(fetchWeather(weatherKey));
    }, []);

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
