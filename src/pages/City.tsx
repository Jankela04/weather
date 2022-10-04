import { useEffect, useState } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import CurrentForecastCard from "../components/CurrentForecastCard";
import { Heading } from "../components/Heading.style";
import NextHoursForecastCard from "../components/NextHoursForecastCard";
import { useAppDispatch, useAppSelector } from "../redux/hooks/useRedux";
import { fetchWeather } from "../redux/slices/weatherSlice";
import { Navigation } from "../components/Navigation.style";
import {
    addCity,
    decreaseIndex,
    getInitialState,
    increaseIndex,
    removeCity,
} from "../redux/slices/CitiesSlice";
import { StyledCheckbox } from "../components/SlideCheckBox.style";

const City = () => {
    const city = useParams();
    const weather = useAppSelector((state) => state.weather.value);
    const weatherApiKey = useAppSelector(
        (state) => state.apiKeys.weatherApiKey
    );
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [isCels, setIsCels] = useState(true);

    const cities = useAppSelector((state) => state.cities);

    useEffect(() => {
        //fetch api

        const data = {
            weatherKey: weatherApiKey,
            location: city.city || "error",
        };
        if (weatherApiKey.length > 1) {
            dispatch(fetchWeather(data));
        }
    }, [weatherApiKey, dispatch, city.city]);

    useEffect(() => {
        localStorage.setItem("savedCities", JSON.stringify(cities.cities));
    }, [cities.cities]);

    return (
        <>
            <Heading>
                <h1>
                    {weather.location?.name}, {weather.location?.country}
                </h1>
                <button
                    onClick={async () => {
                        dispatch(removeCity(cities.index));
                        dispatch(decreaseIndex());
                        setTimeout(() => {
                            if (cities.index === 0) {
                                dispatch(getInitialState());
                                navigate(`/`);
                            } else {
                                navigate(`/${cities.cities[cities.index - 1]}`);
                            }
                        }, 1);
                    }}
                >
                    X
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
                    stroke="#fff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() => {
                        if (cities.index === 0) {
                            navigate("/");
                            dispatch(decreaseIndex());
                        } else {
                            dispatch(decreaseIndex());
                            navigate(`/${cities.cities[cities.index - 1]}`);
                        }
                    }}
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
                    stroke={
                        cities.cities.length === cities.index + 1
                            ? "#808080"
                            : "#fff"
                    }
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() => {
                        if (cities.cities.length === cities.index + 1) return;
                        else {
                            dispatch(increaseIndex());
                            navigate(`/${cities.cities[cities.index + 1]}`);
                        }
                    }}
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
                </svg>
            </Navigation>

            <CurrentForecastCard isCels={isCels} />
            <NextHoursForecastCard isCels={isCels} />
            <StyledCheckbox htmlFor="myToggle">
                <input
                    type="checkbox"
                    id="myToggle"
                    checked={isCels}
                    onChange={() => {
                        setIsCels(!isCels);
                    }}
                />
                <div></div>
            </StyledCheckbox>
        </>
    );
};

export default City;
