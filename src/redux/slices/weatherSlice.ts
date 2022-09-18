import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as WeatherObj from "./weatherInterface";
import { useAppSelector } from "../hooks/useRedux";

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
    async (weatherKey: string) => {
        const res = await axios.get(
            `http://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=51.509865,-0.118092`
        );

        return res.data;
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
