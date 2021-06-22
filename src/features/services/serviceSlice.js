import {createSlice} from '@reduxjs/toolkit'

export const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        services: [
            {
                "date": "15.04.2021",
                "description" : "Description",
                "vat_rate": 10,
                "price": 1000,
                "totalPrice": 1100
            }
        ]
    },
    reducers: {
        add(state, action) {
            state.service.push(action.payload)
        }
    }
})

export const {add} = serviceSlice.actions

export const selectServices = state => state.service.services

export default serviceSlice.reducer



