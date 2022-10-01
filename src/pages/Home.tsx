import { useEffect, useState } from "react";
import CurrentForecastCard from "../components/CurrentForecastCard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Heading } from "../components/Heading.style";
import { useAppDispatch, useAppSelector } from "../redux/hooks/useRedux";
import { fetchWeather } from "../redux/slices/weatherSlice";
import { setWeatherApiKey } from "../redux/slices/apiKeysSlice";
import NextHoursForecastCard from "../components/NextHoursForecastCard";
import { Form } from "../components/Form.style";
import { Navigation } from "../components/Navigation.style";
import { useNavigate } from "react-router-dom";
import { json } from "stream/consumers";
import {
    addCity,
    getInitialState,
    increaseIndex,
} from "../redux/slices/CitiesSlice";

const WEATHER_API_KEY = "e153dcc972b548f4aa4101631220110";

const Home = () => {
    const weather = useAppSelector((state) => state.weather.value);
    const weatherApiKey = useAppSelector(
        (state) => state.apiKeys.weatherApiKey
    );
    const cities = useAppSelector((state) => state.cities);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [isFormActive, setIsFormActive] = useState(false);
    const [inputField, setInputField] = useState("");

    const [coords, setCoords] = useState("");

    useEffect(() => {
        // getting user location
        navigator.geolocation.getCurrentPosition(function (position) {
            setCoords(
                `${position.coords.latitude},${position.coords.longitude}`
            );
        });
        // getting saved locations
        dispatch(getInitialState());
    }, []);

    useEffect(() => {
        //set key to local storage, and store it on redux state
        localStorage.setItem("weatherApiKey", WEATHER_API_KEY);
        dispatch(setWeatherApiKey(localStorage.getItem("weatherApiKey")));
    }, [dispatch]);

    useEffect(() => {
        //fetch api
        const data = { weatherKey: weatherApiKey, location: coords };
        if (weatherApiKey.length > 1 && coords.length > 1) {
            dispatch(fetchWeather(data));
        }
    }, [weatherApiKey, dispatch, coords]);

    // TODO getting and saving cities
    useEffect(() => {
        localStorage.setItem("savedCities", JSON.stringify(cities.cities));
    }, [cities.cities]);

    return (
        <div className="App">
            <Heading>
                <h1>
                    {weather.location?.name}, {weather.location?.country}
                </h1>
                <button
                    onClick={() => {
                        setIsFormActive(!isFormActive);
                    }}
                >
                    +
                </button>
            </Heading>
            <Navigation>
                <svg
                    className="previous-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#808080"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="next-arrow"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke={cities.cities.length > 0 ? "#fff" : "#808080"}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() => {
                        if (cities.cities.length === 0) return;

                        navigate(`/${cities.cities[0]}`);
                        dispatch(increaseIndex());
                    }}
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
                </svg>
            </Navigation>
            {isFormActive && (
                <Form>
                    <input
                        type="text"
                        value={inputField}
                        placeholder="Type City Here"
                        onChange={(e) => {
                            setInputField(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            dispatch(addCity(inputField));
                        }}
                    >
                        Add Location
                    </button>
                </Form>
            )}
            <CurrentForecastCard />

            <NextHoursForecastCard />
        </div>
    );
};

export default Home;
