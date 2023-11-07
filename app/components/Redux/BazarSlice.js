// import { createSlice } from "@reduxjs/toolkit"
// const initialState = {
//     bazarcard:[],
//     quantity:0
// }
// export const bazar = createSlice({
//     name:"Bazar",
//     initialState,
//     reducers: { 
//        AddCard:(state,action) =>{
//         let tempCard = [...state.bazarcard]
//          tempCard.push(action.payload)
//          state.bazarcard = tempCard
//        }

//     }

// }) 
// export const {AddCard} = bazar.actions 
// export default bazar.reducer;























import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    bazarcard: [],
    quantity: ""
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
        UpdateQuantity: (state, action) => {
            state.quantity = action.payload
        },
        Updateitems: (state, action) => {
            let ind = state.bazarcard?.findIndex((item)=> item == action.payload)
            alert(ind + "mat nikal")
            console.log(action.payload)
            ind > 0 ?
                state.bazarcard[ind] = action.payload :
                alert("nikal")
        }
    }
})

export const { AddCard, UpdateQuantity, Updateitems } = bazar.actions
export default bazar.reducer;
