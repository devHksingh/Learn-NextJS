import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '@/lib/store/features/cart/cartSlice'

// store is global variable

// export const store = configureStore({
//     reducer: {
//         cart: cartReducer
//     }
// })

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: cartReducer
        }
    })
}
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']