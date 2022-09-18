import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weatherSlice";
import apiKeysSliceReducer from "./slices/apiKeysSlice";

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        apiKeys: apiKeysSliceReducer,
        // TODO seperate reducer for getting user location
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
