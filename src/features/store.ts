import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weatherSlice";

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        // TODO seperate reducer for getting user location
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;