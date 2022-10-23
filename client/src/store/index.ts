// Node Modules
import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit'
// App Services
import * as Services from "../services"
// App Reducers

const store = configureStore({
    reducer: {

    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        thunk: {
            extraArgument: Services
        }
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, ServiceType, AnyAction>
export type ServiceType = typeof Services

export default store