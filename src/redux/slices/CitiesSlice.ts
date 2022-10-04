import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CityState {
    cities: string[];
    index: number;
}

const initialState: CityState = {
    cities: [],
    index: -1,
};

export const citiesSlice = createSlice({
    name: "Cities",
    initialState,
    reducers: {
        getInitialState: (state) => {
            const localData = JSON.parse(
                localStorage.getItem("savedCities") || "[]"
            );
            state.cities = localData;
        },
        addCity: (state, action: PayloadAction<string>) => {
            state.cities = [...state.cities, action.payload];
        },
        removeCity: (state, action) => {
            if (state.cities.length === 1) state.cities = [];
            else {
                state.cities = [
                    ...state.cities.slice(0, action.payload),
                    ...state.cities.slice(action.payload + 1),
                ];
            }
        },
        increaseIndex: (state) => {
            state.index += 1;
        },
        decreaseIndex: (state) => {
            if (state.index >= 0) state.index -= 1;
        },
    },
});

export const {
    getInitialState,
    addCity,
    removeCity,
    increaseIndex,
    decreaseIndex,
} = citiesSlice.actions;

export default citiesSlice.reducer;
