import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },

    reducers: {
        addtoCart : (state, action )=>{
            const isexist = state.cart.find((item) => item.id === action.payload.id)

            if(isexist){
                state.cart = state.cart.map((item)=> item.id === action.payload.id ? ({...item, qty : item.qty + Number(1)}) : item             
            )
            }else{
                state.cart.push(action.payload)
            }
        },

        
        removeFromCart: (state, action) => {            
            state.cart = state.cart.filter(cartItem => cartItem.id !== action.payload.id);
        },

        increaseItem : (state, action)=>{
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item) {
                item.qty += 1;
            }
        },


        decreaseItem : (state, action)=>{
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item && item.qty > 1) {
                item.qty -= 1;
            } else {
            
                state.cart = state.cart.filter(i => i.id !== action.payload.id);
            }
        }


    }
})


export const { addtoCart, removeFromCart, increaseItem, decreaseItem } = CartSlice.actions;

export default CartSlice.reducer;