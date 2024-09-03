import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "./features/habitsSlice";
const store = configureStore({
  reducer: {
    // Registering the habitsReducer under the key 'allHabits' to manage the habits state
    allHabits: habitsReducer,
  },
});

export default store;
