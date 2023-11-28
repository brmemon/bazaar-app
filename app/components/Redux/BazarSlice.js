import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    bazarcard: [],
    count: 0
}

export const bazar = createSlice({
    name: "Bazar",
    initialState,
    reducers: {
        AddCard: (state, action) => {
            let tempCard = [...state.bazarcard]
            tempCard.push(action.payload)
            state.bazarcard = tempCard
        },
        Updateitems: (state, action) => {
            let ind = current(state.bazarcard).findIndex((item) => item.item?.name === action.payload?.item?.name);
            if (current(state.bazarcard)) {
                state.bazarcard[ind] = action.payload
            }
        },
        DeleteItem: (state, action) => {
            let ind = current(state.bazarcard).findIndex((item) => item.item?.name === action.payload?.item?.name);
            let temp = [...current(state.bazarcard)]
            temp = temp?.filter((item, index) => index !== ind)
            state.bazarcard = temp
        },
        UpdateModalitems: (state, action) => {
            state.bazarcard[action.payload.ind].quantity += action.payload.quantity
        },
        delcard: (state, action) => {
            state.bazarcard = state.bazarcard.filter((elem,ind)=> ind !== action.payload);
            state.count = state.bazarcard.length;
        }
    }
})

export const { AddCard, Updateitems, DeleteItem, UpdateModalitems, delcard } = bazar.actions
export default bazar.reducer;
