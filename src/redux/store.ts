import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weatherSlice";
import apiKeysSliceReducer from "./slices/apiKeysSlice";
import citiesReducer from "./slices/CitiesSlice";

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        apiKeys: apiKeysSliceReducer,
        cities: citiesReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
