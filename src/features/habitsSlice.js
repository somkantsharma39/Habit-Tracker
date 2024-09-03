// Importing the function
import { createSlice } from "@reduxjs/toolkit";

// Array representing the status of habits for each day of the week, Initialized with 'none' status for each day
export const details = [
  { day: "Mon", status: "none" },
  { day: "Tue", status: "none" },
  { day: "Wed", status: "none" },
  { day: "Thu", status: "none" },
  { day: "Fri", status: "none" },
  { day: "Sat", status: "none" },
  { day: "Sun", status: "none" },
];

// Load habits from local storage if they exist, otherwise use default habit
const habitsFromStorage = localStorage.getItem("newHabits")
  ? JSON.parse(localStorage.getItem("newHabits"))
  : [{ title: "early bird", description: "wake up at 3:45am", details }];

// Create a mutable copy of the habits array
let habits = [...habitsFromStorage];

// Define the initial state of the slice
const initialState = {
  habits: habits,
};

// Create a Redux slice for habits with actions and reducers
const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    // Action to add a new habit
    addHabit: (state, { payload }) => {
      state.habits = [...state.habits, payload];
      habits = [...habits, payload];
      window.localStorage.setItem("newHabits", JSON.stringify(habits));
    },
    // Action to delete an existing habit
    deleteHabit: (state, action) => {
      state.habits = state.habits.filter(
        (habit) => habit.title !== action.payload
      );
      window.localStorage.setItem("newHabits", JSON.stringify(state.habits));
    },
    // Action to change the status of a habit detail
    changeStatus: (state, { payload }) => {
      state.habits.forEach((habit) => {
        if (habit.title === payload.title) {
          habit.details.forEach((detail) => {
            if (detail.day === payload.details[0].day) {
              // Update status for specific day
              detail.status = payload.details[0].status;
            }
          });
        }
      });
      // Save updated habits to local storage
      window.localStorage.setItem("newHabits", JSON.stringify(state.habits));
    },
  },
});
// Log the slice for debugging purposes
console.log(habitsSlice);

// Export actions
export const { addHabit, deleteHabit, changeStatus } = habitsSlice.actions;

export default habitsSlice.reducer;
