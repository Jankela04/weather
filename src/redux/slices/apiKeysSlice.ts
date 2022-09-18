import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    weatherApiKey: string;
    locationApiKey: string;
};

const initialState: InitialState = {
    weatherApiKey: "",
    locationApiKey: "",
};

const apiKeysSlice = createSlice({
    name: "apiKeys",
    initialState,
    reducers: {
        setWeatherApiKey(state, action) {
            state.weatherApiKey = action.payload;
        },
    },
});
export const { setWeatherApiKey } = apiKeysSlice.actions;

export default apiKeysSlice.reducer;
