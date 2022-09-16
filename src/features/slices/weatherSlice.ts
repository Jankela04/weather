import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as WeatherObj from "./weatherInterface";

const API_KEY = `17c9212f81fe4ad699174506221609`;

const city = "Temerin"; // TODO get city hook

type InitialState = {
    loading: boolean;
    value: WeatherObj.Weather;
    error: string;
};

const initialState: InitialState = {
    loading: false,
    value: {},
    error: "",
};

export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    (key: string) => {
        return axios
            .get(
                `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}`
            )
            .then((response) => response.data);
    }
);

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload;
            state.error = "";
        });
        builder.addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false;
            state.value = {};
            state.error = action.error.message || "Something went wrong";
        });
    },
});

export default weatherSlice.reducer;
