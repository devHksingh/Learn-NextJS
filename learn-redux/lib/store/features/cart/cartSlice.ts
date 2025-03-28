import { createSlice, PayloadAction } from "@reduxjs/toolkit"



export interface CartState {
    productId: number,
    quantity: number
}

const initialState: CartState[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<{ productId: number, quantity: number }>) => {
            const { productId, quantity } = action.payload
            const existingProduct = state.find((item) => item.productId === productId)
            if (existingProduct) {
                existingProduct.quantity = quantity
            } else {
                state.push({ productId: productId, quantity: 1 })
            }
        },
        removeProductQuantity: (state, action: PayloadAction<{ productId: number, quantity: number }>) => {
            const { productId, quantity } = action.payload
            const existingProduct = state.find((item) => item.productId === productId)
            if (existingProduct) {
                if (existingProduct.quantity === 1) {
                    return state.filter((item) => item.productId !== productId)
                } else {
                    existingProduct.quantity -= quantity || 1
                }
            }
        },
        removeProduct: (state, action: PayloadAction<{ productId: number }>) => {
            const { productId } = action.payload
            const existingProduct = state.find((item) => item.productId === productId)
            if (existingProduct) {
                return state.filter((item) => item.productId !== productId)
            }
        },
        clearCart:()=>{
            return []
        }
    }
})