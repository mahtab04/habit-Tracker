import { configureStore } from '@reduxjs/toolkit'
import habitsReducer from '../features/HabitsSlice'

// Create the Redux store and configure the root reducer to include the habits reducer
const store = configureStore({
    reducer: {
        allHabits: habitsReducer,
    },
})

export default store
